import open from 'open';
import * as path from 'path';
import * as os from 'os';
import { v4 as uuidv4 } from 'uuid';
import * as chokidar from 'chokidar';
import * as fs from 'fs';
import * as fsp from 'fs/promises';
import * as R from 'ramda';
import Ajv, { JSONSchemaType } from 'ajv';

import { BaseBomExporter } from '../base-bom-exporter';
import {
  BomLocation,
  BomLocationType,
  ExporterFactoryRegistry,
} from '../exporter-factory-registry';
import { PartName } from '../onshape/onshape-types';
import { Fusion360ExportUrlBuilder } from './fusion-360-export-url-builder';
import { BillOfMaterials, BomInstance } from '../../bom-types-and-schemas';
import {
  Fusion360DeviceNotFoundError,
  Fusion360InvalidBomLocationError,
  Fusion360PartsNotFoundError,
} from './errors';
import { ConfigService } from '@nestjs/config';
import { InternalServerError } from '../../errors';
import { ExportStatusService } from '../status/export-status.service';

export interface Fusion360Bom
  extends BillOfMaterials<BomLocationType.Fusion360> {
  location: Fusion360BomLocation;
}

export interface Fusion360BomLocation
  extends BomLocation<BomLocationType.Fusion360> {
  type: BomLocationType.Fusion360;
  dir: string;
}

const Fusion360BomLocationSchema: JSONSchemaType<Fusion360BomLocation> = {
  type: 'object',
  properties: {
    type: { type: 'string', const: BomLocationType.Fusion360 },
    dir: { type: 'string' },
  },
  additionalProperties: false,
  required: ['type', 'dir'],
};

ExporterFactoryRegistry.registerBomExporterFactory<
  Fusion360Bom,
  BomLocationType.Fusion360
>({
  type: BomLocationType.Fusion360,
  make: ({ id, billOfMaterials, configService, exportStatusService }) => {
    const fileService = new Fusion360FileService(configService);
    const urlBuilder = new Fusion360ExportUrlBuilder(fileService);
    return new Fusion360BomExporter(
      id,
      billOfMaterials,
      fileService,
      urlBuilder,
      exportStatusService,
    );
  },
});

export class Fusion360FileService {
  private readonly fusionFilesDir: string;
  private readonly outputDir: string = path.join(os.tmpdir(), uuidv4());

  constructor(configService: ConfigService) {
    const fusionFilesDir = configService.get<string>('FUSION_FILES_DIR');
    if (!fusionFilesDir)
      throw new InternalServerError('Missing env var: FUSION_FILES_DIR');
    this.fusionFilesDir = fusionFilesDir;
  }

  public getOutputDir(): string {
    return this.outputDir;
  }

  public getInputDirForDevice(deviceDir: string): string {
    return path.join(this.fusionFilesDir, deviceDir);
  }

  public async checkIfDeviceDirExists(dir: string): Promise<boolean> {
    const deviceDir = path.join(this.fusionFilesDir, dir);
    try {
      await fsp.access(deviceDir, fs.constants.R_OK);
      return true;
    } catch {
      return false;
    }
  }

  public async getAvailablePartsForDevice(dir: string): Promise<string[]> {
    const inputDirPath = path.join(this.fusionFilesDir, dir);
    const filesInInputDir = await fsp.readdir(inputDirPath);
    return filesInInputDir.map((partFileName) => partFileName.split('.')[0]);
  }

  public async readExportedStlDataForName(name: PartName): Promise<Buffer> {
    return this.readExportedStlDataForPartWithName(name + '.stl');
  }

  public async readExportedStlDataForInstance(
    instance: BomInstance,
  ): Promise<Buffer> {
    return await this.readExportedStlDataForName(instance.name);
  }

  private async readExportedStlDataForPartWithName(
    fileName: string,
  ): Promise<Buffer> {
    const exportedPath = path.join(this.outputDir, fileName);
    return await fsp.readFile(exportedPath);
  }
}

export class Fusion360BomExporter extends BaseBomExporter<
  Fusion360Bom,
  BomLocationType.Fusion360
> {
  public readonly locationType = BomLocationType.Fusion360;
  private readonly dir: string;

  constructor(
    protected readonly exportId: string,
    protected readonly billOfMaterials: Fusion360Bom,
    protected readonly fileService: Fusion360FileService,
    protected readonly urlBuilder: Fusion360ExportUrlBuilder,
    protected readonly exportStatusService: ExportStatusService,
  ) {
    super(exportId, billOfMaterials, exportStatusService);
    this.dir = billOfMaterials.location.dir;
  }

  protected async stlDataForDefaultLine(partName: string): Promise<Buffer> {
    const url = this.urlBuilder.urlForDeviceDirAndPartName(this.dir, partName);
    this.exportStatusService.partExporting(this.exportId, partName);
    await this.exportFileWithUrl(url);
    this.exportStatusService.partExported(this.exportId, partName);
    return await this.fileService.readExportedStlDataForName(partName);
  }

  protected async stlDataForConfiguredLineInstance(
    partName: string,
    instance: BomInstance,
  ): Promise<Buffer> {
    const url = this.urlBuilder.urlForDeviceDirPartNameAndInstance(
      this.dir,
      partName,
      instance,
    );
    this.exportStatusService.partExporting(this.exportId, instance.name);
    await this.exportFileWithUrl(url);
    this.exportStatusService.partExported(this.exportId, instance.name);
    return await this.fileService.readExportedStlDataForInstance(instance);
  }

  private static readonly validateBomLocation = new Ajv().compile(
    Fusion360BomLocationSchema,
  );

  /**
     This method is NOT tasked with ensuring the device described by the location
     is available. It is ONLY responsible for ensuring that the structure of the
     location object is correct.
     */
  protected verifyBomLocationStructureIsValid(location: Fusion360BomLocation) {
    if (Fusion360BomExporter.validateBomLocation(location)) return;
    throw new Fusion360InvalidBomLocationError(
      Fusion360BomExporter.validateBomLocation.errors,
    );
  }

  protected async verifyDeviceAndAllPartsAreAvailable(): Promise<void> {
    await this.verifyDeviceExists();
    await this.verifyPartsExist();
  }

  private async verifyDeviceExists(): Promise<void> {
    const exists = await this.fileService.checkIfDeviceDirExists(this.dir);
    if (!exists) {
      throw new Fusion360DeviceNotFoundError(
        this.billOfMaterials.name,
        this.billOfMaterials.location.dir,
      );
    }
  }

  private async verifyPartsExist(): Promise<void> {
    const availableParts = await this.fileService.getAvailablePartsForDevice(
      this.billOfMaterials.location.dir,
    );
    const expectedParts = R.keys(this.billOfMaterials.materials);

    const missingParts = R.difference(expectedParts, availableParts);
    if (missingParts.length)
      throw new Fusion360PartsNotFoundError(
        missingParts,
        this.billOfMaterials.name,
      );
  }

  private async exportFileWithUrl(url: string): Promise<void> {
    const waitForOutput = this.waitForFileOutputFromUrl(url);
    await open(url);
    await waitForOutput;
  }

  private waitForFileOutputFromUrl(url: string): Promise<void> {
    // It's easier to just extract this info from the URL instead of passing it
    const privateInfoFromUrl = new URL(url).searchParams.get('privateInfo')!;
    const { outputDir, filename } = JSON.parse(privateInfoFromUrl);
    const outputFilePath = path.join(outputDir, filename);
    const outputFileWatcher = chokidar.watch(outputDir, {
      usePolling: true,
    });
    return new Promise<void>((resolve) =>
      outputFileWatcher.on('add', (filename) => {
        if (filename === outputFilePath) resolve();
      }),
    ).then(() => outputFileWatcher.close());
  }
}
