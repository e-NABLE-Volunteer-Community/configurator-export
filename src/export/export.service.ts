import { Inject, Injectable, Scope } from '@nestjs/common';
import {
  BillOfMaterials,
  BomInstance,
  BomLine,
  ConfiguredBomLine,
  DefaultBomLine,
  ExportId,
  isDefaultBomLine,
} from '../bom-types-and-schemas';
import { WinstonLokiLoggerService } from '../logger/winston-loki-logger.service';
import { InternalServerError } from '../errors';
import { ExportPackagingService } from './output/export-packaging.service';
import { ExportStatusService } from './status/export-status.service';
import { LocalizedError } from '../error';
import * as R from 'ramda';
import { ElementId, Part, PartName } from './onshape-api/onshape-types';
import { OnshapePartsNotFoundError } from './onshape-api/errors';
import { OnshapeExportApi } from './onshape-api/onshape-export-api';
import { REQUEST } from '@nestjs/core';
import { FastifyRequest } from 'fastify';
import * as uuid from 'uuid';

export type StlFile = { data: Buffer; name: string };

@Injectable({ scope: Scope.REQUEST })
export class ExportService {
  private readonly id: ExportId;
  private readonly bom: BillOfMaterials;
  private readonly api: OnshapeExportApi;

  private partsForWorkspacePromise: Promise<Part[]>;

  constructor(
    private readonly logger: WinstonLokiLoggerService,
    private readonly exportStatusService: ExportStatusService,
    private readonly exportOutputService: ExportPackagingService,
    @Inject(REQUEST) private request: FastifyRequest<{ Body: BillOfMaterials }>,
  ) {
    this.id = uuid.v4();
    this.bom = request.body;
    this.api = new OnshapeExportApi(this.id, this.bom);
  }

  public initiateExport(): ExportId {
    this.performExport().then(/*NOOP*/);
    return this.id;
  }

  private async performExport(): Promise<void> {
    try {
      this.logger.log('Exporting...', {
        id: this.id,
        location: this.bom.location,
      });
      this.exportStatusService.exportQueued(this.id);
      await this.verifyDeviceAndAllPartsAreAvailable();
      this.exportStatusService.exportExporting(
        this.id,
        this.artifactNames(this.bom),
      );
      const stls = await this.getStls();
      this.exportStatusService.exportExported(this.id);
      this.logger.log(`Finished exporting ${this.id}.`);
      this.exportStatusService.exportZipping(this.id);
      await this.exportOutputService.saveStlsAndBomForExport(
        this.id,
        stls,
        this.bom,
      );
      this.exportStatusService.exportCompleted(this.id);
    } catch (e) {
      if (e instanceof LocalizedError) throw e;
      throw new InternalServerError( // TODO: LocalizedError
        `Unknown error while exporting: ${
          e instanceof Error ? e.message : JSON.stringify(e)
        }`,
        e,
      );
    }
  }

  // Part names are not going to be the same as artifact names because configured
  // instances are not named the same as their parts
  private artifactNames(bom: BillOfMaterials): string[] {
    const artifactNamesForLine = (
      partName: string,
      line: BomLine,
    ): string[] => {
      if (isDefaultBomLine(line)) return [partName];
      return line.instances.map(R.prop('name'));
    };
    const artifactNames: string[] = [];
    for (const pair of R.toPairs(bom.materials)) {
      artifactNames.push(...artifactNamesForLine(...pair));
    }
    return artifactNames;
  }

  private async getStls(): Promise<StlFile[]> {
    const stlsPromises: Promise<StlFile | StlFile[]>[] = [];
    for (const [partName, line] of R.toPairs(this.bom.materials)) {
      stlsPromises.push(this.exportBomLine(partName, line));
    }
    return R.flatten(await Promise.all(stlsPromises));
  }

  private exportBomLine(partName: string, line: BomLine): Promise<StlFile[]> {
    if (isDefaultBomLine(line)) return this.exportDefaultLine(partName, line);
    return this.exportConfiguredLine(partName, line);
  }

  private async exportDefaultLine(
    partName: PartName,
    line: DefaultBomLine,
  ): Promise<StlFile[]> {
    this.exportStatusService.partQueued(this.id, partName);
    const data = await this.stlDataForDefaultLine(partName);
    const files = R.times(
      (i) => ({ data, name: `${partName}-${i}.stl` }),
      line.count,
    );
    this.exportStatusService.partExported(this.id, partName);
    return files;
  }

  private async exportConfiguredLine(
    partName: PartName,
    line: ConfiguredBomLine,
  ): Promise<StlFile[]> {
    const fileForInstance = async (instance: BomInstance): Promise<StlFile> => {
      this.exportStatusService.partQueued(this.id, instance.name);
      const dataProm = this.stlDataForConfiguredLineInstance(
        partName,
        instance,
      );
      const file = { name: instance.name + '.stl', data: await dataProm };
      this.exportStatusService.partExported(this.id, instance.name);
      return file;
    };

    return Promise.all(line.instances.map(fileForInstance));
  }

  private async verifyDeviceAndAllPartsAreAvailable(): Promise<void> {
    const parts = await this.getParts();
    const availableParts = parts.map(R.prop('name'));
    const expectedParts = R.keys(this.bom.materials);

    const missingParts = R.difference(expectedParts, availableParts);
    if (missingParts.length) {
      console.log({ expectedParts, availableParts });
      throw new OnshapePartsNotFoundError(missingParts, this.bom.name);
    }
  }

  private async getParts(): Promise<Part[]> {
    if (this.partsForWorkspacePromise) return this.partsForWorkspacePromise;
    this.partsForWorkspacePromise = this.api.getParts();
    return this.partsForWorkspacePromise;
  }

  private async stlDataForDefaultLine(partName: string): Promise<Buffer> {
    const elementId = await this.elementIdForPartWithName(partName);
    return await this.api.exportPart(elementId);
  }

  private async stlDataForConfiguredLineInstance(
    partName: string,
    instance: BomInstance,
  ): Promise<Buffer> {
    const elementId = await this.elementIdForPartWithName(partName);
    return await this.stlDataForElementWithConfiguration(
      elementId,
      instance.parameters,
    );
  }

  private async elementIdForPartWithName(partName: string): Promise<ElementId> {
    const parts = await this.getParts();
    const part = parts.find(R.propEq('name', partName));

    // This should never be thrown as we already checked for a part with this
    // name. For this reason, we thrown an InternalServerError instead of 404
    if (!part)
      throw new InternalServerError(
        'Could not find part with name: ' + partName,
      );
    return part.elementId;
  }

  private async stlDataForElementWithConfiguration(
    elementId: ElementId,
    parameters: Record<string, string>,
  ): Promise<Buffer> {
    return await this.api.exportPartWithParameters(elementId, parameters);
  }
}
