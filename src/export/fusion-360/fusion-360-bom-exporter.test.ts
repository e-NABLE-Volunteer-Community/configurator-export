import { Fusion360Bom, Fusion360BomExporter, Fusion360FileService } from './fusion360-bom-exporter';
import * as fs from 'fs';
import { Fusion360DeviceNotFoundError, Fusion360InvalidBomLocationError, Fusion360PartsNotFoundError } from './errors';
import { Fusion360ExportUrlBuilder } from './fusion-360-export-url-builder';
import { Test } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as path from 'path';
import * as process from 'process';
import { ExportStatusService } from '../status/export-status.service';
import { ExportStatusModule } from '../status/export-status.module';
import { WinstonLokiLoggerModule } from '../../logger/winston-loki-logger.module';

//<editor-fold desc="Test Data">
const validBom = {
  name: 'Test Device',
  location: {
    type: 'Fusion360',
    dir: 'TestDevice',
  },
  materials: {
    Test1: {
      instances: [
        {
          name: 'Widget_1',
          parameters: {
            diam: '34 mm',
          },
        },
      ],
    },
    Test2: {
      instances: [
        {
          name: 'Widget_2',
          parameters: {
            x: '10 mm',
            y: '20 mm',
            z: '30 mm',
          },
        },
        {
          name: 'Widget_3',
          parameters: {
            x: '10 mm',
            y: '10 mm',
            z: '10 mm',
          },
        },
      ],
    },
    Test3: {
      count: 2,
    },
  },
};

const unknownDeviceBom = {
  name: 'Unknown Device',
  location: {
    type: 'Fusion360',
    dir: 'UnknownDeviceDir',
  },
  materials: {
    Test1: {
      instances: [
        {
          name: 'Widget_1',
          parameters: {
            diam: '34 mm',
          },
        },
      ],
    },
    Test2: {
      instances: [
        {
          name: 'Widget_2',
          parameters: {
            x: '10 mm',
            y: '20 mm',
            z: '30 mm',
          },
        },
        {
          name: 'Widget_3',
          parameters: {
            x: '10 mm',
            y: '10 mm',
            z: '10 mm',
          },
        },
      ],
    },
    Test3: {
      count: 2,
    },
  },
};

const unknownPartBom = {
  name: 'Test Device',
  location: {
    type: 'Fusion360',
    dir: 'TestDevice',
  },
  materials: {
    Test1: {
      instances: [
        {
          name: 'Widget_1',
          parameters: {
            diam: '34 mm',
          },
        },
      ],
    },
    UnknownPart1: {
      count: 2,
    },
    UnknownPart2: {
      count: 2,
    },
  },
};
//</editor-fold>

/**
 * These tests require Fusion to be available.
 * If Fusion is not already opened, the exporter will open it.
 */
describe('export/fusion-360/fusion-360-bom-exporter', () => {
  const exportId = '5555';
  let urlBuilder: Fusion360ExportUrlBuilder;
  let fileService: Fusion360FileService;
  let exportStatusService: ExportStatusService;
  let partExportingSpy;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        WinstonLokiLoggerModule,
        ExportStatusModule,
      ],
    }).compile();

    const configService = moduleRef.get(ConfigService);

    jest
      .spyOn(configService, 'get')
      .mockImplementation(() =>
        path.join(
          process.cwd(),
          './src/export/fusion-360/test-data/fusion-360-files',
        ),
      );

    fileService = new Fusion360FileService(configService);
    urlBuilder = new Fusion360ExportUrlBuilder(fileService);

    exportStatusService = moduleRef.get(ExportStatusService);

    partExportingSpy = jest.spyOn(exportStatusService, 'partExporting');
  });

  describe('Fusion360BomExporter', () => {
    describe('input validation', () => {
      it('throws a DeviceNotFoundError for UnknownDevice', async () => {
        const exporter = new Fusion360BomExporter(
          exportId,
          unknownDeviceBom as Fusion360Bom,
          fileService,
          urlBuilder,
          exportStatusService,
        );

        const expErr = new Fusion360DeviceNotFoundError(
          'Unknown Device',
          'UnknownDeviceDir',
        );
        const exportProm = exporter.exportBom();
        await expect(exportProm).rejects.toEqual(expErr);
      });

      it('throws a PartNotFoundError for UnknownPart', async () => {
        const exporter = new Fusion360BomExporter(
          exportId,
          unknownPartBom as Fusion360Bom,
          fileService,
          urlBuilder,
          exportStatusService,
        );

        const expErr = new Fusion360PartsNotFoundError(
          ['UnknownPart1', 'UnknownPart2'],
          'Test Device',
        );
        const exportProm = exporter.exportBom();
        await expect(exportProm).rejects.toEqual(expErr);
      });

      it('throws InvalidBomLocationError for invalid BoM location', async () => {
        const invalidBom = {
          name: 'Test Device',
          location: { document: 'doc' },
          materials: {},
        } as unknown as Fusion360Bom;
        await expect(
          () =>
            new Fusion360BomExporter(
              exportId,
              invalidBom,
              fileService,
              urlBuilder,
              exportStatusService,
            ),
        ).toThrow(expect.any(Fusion360InvalidBomLocationError));
      });
    });

    describe('exportBom', () => {
      // If Fusion was not already opened, it might take a while to start.
      jest.setTimeout(90000);

      it('returns appropriate STL files for test bom', async () => {
        const exporter = new Fusion360BomExporter(
          exportId,
          validBom as Fusion360Bom,
          fileService,
          urlBuilder,
          exportStatusService,
        );

        const exportProm = exporter.exportBom();
        const stlFiles = await exportProm;

        const artifactNames = ['Widget_1', 'Widget_2', 'Widget_3', 'Test3'];
        artifactNames.forEach((name) => {
          expect(partExportingSpy).toHaveBeenCalledWith(exportId, name);
        });

        // All files will be at least 1kb, just checking that they have some content
        stlFiles.forEach((file) => {
          expect(file.data.length).toBeGreaterThan(1000);
          fs.writeFileSync(
            path.join(
              process.cwd(),
              './src/export/fusion-360/test-data/test-output',
              file.name,
            ),
            file.data,
          );
        });
      });
    });
  });
});
