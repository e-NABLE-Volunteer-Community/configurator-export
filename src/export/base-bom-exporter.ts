import * as R from 'ramda';
import Ajv from 'ajv';
import {
  BillOfMaterials,
  BillOfMaterialsSchema,
  BomInstance,
  BomLine,
  ConfiguredBomLine,
  DefaultBomLine,
  isDefaultBomLine,
} from '../bom-types-and-schemas';
import { InvalidBomError } from './errors';
import { ExportStatusService } from './status/export-status.service';
import { PartName } from './onshape/onshape-types';

export type StlFile = { name: string; data: Buffer };

export abstract class BaseBomExporter<
  B extends BillOfMaterials,
  L extends B extends BillOfMaterials<infer _L> ? _L : never,
> {
  // Used to guarantee type safety in router
  public abstract readonly locationType: L;
  private static readonly validateBom = new Ajv().compile(
    BillOfMaterialsSchema,
  );

  protected constructor(
    protected readonly exportId: string,
    protected readonly billOfMaterials: B,
    protected readonly exportStatusService: ExportStatusService,
  ) {
    this.verifyBomStructureIsValid(this.billOfMaterials);
  }

  /**
   This method is NOT tasked with ensuring the contents of the BoM are valid.
   It is ONLY responsible for ensuring the structure of the BoM is valid.
   For example, this method DOES NOT check that the device exists, or that the
   list of parts matches what's available.
   This method DOES check that the BoM has a name, a location, and a materials
   property of the correct form.
   */
  private verifyBomStructureIsValid(billOfMaterials: BillOfMaterials): void {
    if (!BaseBomExporter.validateBom(billOfMaterials))
      throw new InvalidBomError(BaseBomExporter.validateBom.errors);
    this.verifyBomLocationStructureIsValid(billOfMaterials.location);
  }

  //TODO: Consider refactoring to make locationSchema an abstract member
  // on BaseBomExporter like locationType is
  /**
   This method is NOT tasked with ensuring the device described by the location
   is available. It is ONLY responsible for ensuring that the structure of the
   location object is correct.
   */
  protected abstract verifyBomLocationStructureIsValid(
    location: B['location'],
  ): void;

  protected abstract verifyDeviceAndAllPartsAreAvailable(): Promise<void>;

  public async exportBom(): Promise<StlFile[]> {
    this.exportStatusService.exportQueued(this.exportId);
    await this.verifyDeviceAndAllPartsAreAvailable();
    this.exportStatusService.exportExporting(
      this.exportId,
      this.artifactNames(),
    );
    const stlsPromises: Promise<StlFile | StlFile[]>[] = [];
    for (const [partName, line] of R.toPairs(this.billOfMaterials.materials)) {
      stlsPromises.push(this.exportBomLine(partName, line));
    }
    const stls: StlFile[] = R.flatten(await Promise.all(stlsPromises));
    this.exportStatusService.exportExported(this.exportId);
    return stls;
  }

  private exportBomLine(partName: string, line: BomLine): Promise<StlFile[]> {
    if (isDefaultBomLine(line)) return this.exportDefaultLine(partName, line);
    return this.exportConfiguredLine(partName, line);
  }

  // Part names are not going to be the same as artifact names because configured
  // instances are not named the same as their parts
  private artifactNames(): string[] {
    const artifactNamesForLine = (
      partName: string,
      line: BomLine,
    ): string[] => {
      if (isDefaultBomLine(line)) return [partName];
      return line.instances.map(R.prop('name'));
    };
    const artifactNames: string[] = [];
    for (const pair of R.toPairs(this.billOfMaterials.materials)) {
      artifactNames.push(...artifactNamesForLine(...pair));
    }
    return artifactNames;
  }

  private async exportDefaultLine(
    partName: PartName,
    line: DefaultBomLine,
  ): Promise<StlFile[]> {
    this.exportStatusService.partQueued(this.exportId, partName);
    const data = await this.stlDataForDefaultLine(partName);
    const files = R.times(
      (i) => ({ data, name: `${partName}-${i}.stl` }),
      line.count,
    );
    this.exportStatusService.partExported(this.exportId, partName);
    return files;
  }

  private async exportConfiguredLine(
    partName: PartName,
    line: ConfiguredBomLine,
  ): Promise<StlFile[]> {
    const fileForInstance = async (instance: BomInstance): Promise<StlFile> => {
      this.exportStatusService.partQueued(this.exportId, instance.name);
      const dataProm = this.stlDataForConfiguredLineInstance(
        partName,
        instance,
      );
      const file = { name: instance.name + '.stl', data: await dataProm };
      this.exportStatusService.partExported(this.exportId, instance.name);
      return file;
    };

    return Promise.all(line.instances.map(fileForInstance));
  }

  protected abstract stlDataForDefaultLine(partName: PartName): Promise<Buffer>;
  protected abstract stlDataForConfiguredLineInstance(
    partName: PartName,
    instance: BomInstance,
  ): Promise<Buffer>;
}
