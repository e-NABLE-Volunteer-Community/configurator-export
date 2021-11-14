import open from 'open';
import * as path from 'path';
import * as os from 'os';
import { v4 as uuidv4 } from 'uuid';
import * as chokidar from 'chokidar';
import * as fs from 'fs';
import * as fsp from 'fs/promises';
import * as R from 'ramda';
import Ajv, { JSONSchemaType } from 'ajv';

import { BaseBomExporter, StlFile } from '../base-bom-exporter.js';
import {
  BomLocation,
  BomLocationType,
  ExporterFactoryRegistry,
} from '../exporter-factory-registry.js';
import { PartName } from '../onshape/onshape-types.js';
import { Fusion360ExportUrlBuilder } from './fusion-360-export-url-builder.js';
import {
  BillOfMaterials,
  BomInstance,
  ConfiguredBomLine,
  DefaultBomLine,
} from '../../bom-types-and-schemas.js';
import {
  Fusion360DeviceNotFoundError,
  Fusion360InvalidBomLocationError,
  Fusion360PartsNotFoundError,
} from './errors.js';
import { ConfigService } from '@nestjs/config';
import { InternalServerError } from '../../errors';

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
  make: (id: string, bom: Fusion360Bom, configService: ConfigService) => {
    const fileService = new Fusion360FileService(configService);
    const urlBuilder = new Fusion360ExportUrlBuilder(fileService);
    return new Fusion360BomExporter(id, bom, fileService, urlBuilder);
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

  public async readExportedStlFileForPartName(
    partName: PartName,
  ): Promise<StlFile> {
    return this.readExportedStlFileWithName(partName + '.stl');
  }

  public async readExportedStlFileForInstance(
    instance: BomInstance,
  ): Promise<StlFile> {
    return this.readExportedStlFileWithName(instance.name + '.stl');
  }

  private async readExportedStlFileWithName(
    fileName: string,
  ): Promise<StlFile> {
    const exportedPath = path.join(this.outputDir, fileName);
    const data = (await fsp.readFile(exportedPath)).toString();
    return { name: fileName, data };
  }
}

export class Fusion360BomExporter extends BaseBomExporter<
  Fusion360Bom,
  BomLocationType.Fusion360
> {
  private static readonly validateBomLocation = new Ajv().compile(
    Fusion360BomLocationSchema,
  );

  public readonly locationType = BomLocationType.Fusion360;

  private readonly dir: string;

  constructor(
    protected readonly exportId: string,
    protected readonly billOfMaterials: Fusion360Bom,
    protected readonly fileService: Fusion360FileService,
    protected readonly urlBuilder: Fusion360ExportUrlBuilder,
  ) {
    super(exportId, billOfMaterials);
    this.dir = billOfMaterials.location.dir;
  }

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

  protected async stlsForDefaultLine(
    partName: string,
    line: DefaultBomLine,
  ): Promise<StlFile[]> {
    await this.verifyDeviceAndAllPartsAreAvailable();
    const url = this.urlBuilder.urlForDeviceDirAndPartName(this.dir, partName);
    await this.exportFileWithUrl(url);
    const stl: StlFile = await this.fileService.readExportedStlFileForPartName(
      partName,
    );
    return R.times(
      (i) => ({ name: partName + '-' + i + '.stl', data: stl.data }),
      line.count,
    );
  }

  protected async stlsForConfiguredLine(
    partName: string,
    line: ConfiguredBomLine,
  ): Promise<StlFile[]> {
    const stls: StlFile[] = [];
    for (const instance of line.instances) {
      const url = this.urlBuilder.urlForDeviceDirPartNameAndInstance(
        this.dir,
        partName,
        instance,
      );
      await this.exportFileWithUrl(url);
      stls.push(
        await this.fileService.readExportedStlFileForInstance(instance),
      );
    }
    return stls;
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
    );
  }
}
