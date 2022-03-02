import { OnshapeBom, OnshapeBomExporter } from './onshape-bom-exporter';
import {
  OnshapeDeviceNotFoundError,
  OnshapeInvalidBomLocationError,
  OnshapePartsNotFoundError,
} from './errors';
import { BomLocationType } from '../exporter-factory-registry';
import { OnshapeApi } from './onshape-api';
import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { Part } from './onshape-types';
import { ExportStatusService } from '../status/export-status.service';
import { WinstonLokiLoggerModule } from '../../logger/winston-loki-logger.module';
import { configServiceTestProvider } from '../../testware/config-service';

describe('export/onshape/onshape-bom-exporter', () => {
  const exportId = '5555';
  let api: OnshapeApi;
  let exportStatusService: ExportStatusService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [WinstonLokiLoggerModule],
      providers: [configServiceTestProvider, ExportStatusService],
    }).compile();
    const configService = moduleRef.get(ConfigService);
    jest.spyOn(configService, 'get').mockImplementation(() => 'mock_value');
    api = new OnshapeApi(configService);

    exportStatusService = moduleRef.get(ExportStatusService);
  });

  describe('OnshapeBomExporter', () => {
    describe('input validation', () => {
      const documentId = '1234',
        workspaceId = '5678';
      it('throws an OnshapeDeviceNotFoundError for unknown device', async () => {
        jest
          .spyOn(api, 'getPartsForWorkspace')
          .mockImplementation(() => Promise.resolve({ status: 404 }));

        const bomWithUnknownDevice: OnshapeBom = {
          name: 'Unknown Device',
          location: {
            type: BomLocationType.Onshape,
            documentId,
            workspaceId,
          },
          materials: {},
        };

        const exporter = new OnshapeBomExporter(
          exportId,
          bomWithUnknownDevice,
          api,
          exportStatusService,
        );

        const expErr = new OnshapeDeviceNotFoundError(
          'Unknown Device',
          documentId,
          workspaceId,
        );
        await expect(exporter.exportBom()).rejects.toEqual(expErr);
      });

      it('throws an OnshapePartNotFoundError for unknown parts', async () => {
        jest
          .spyOn(api, 'getPartsForWorkspace')
          .mockImplementation(() =>
            Promise.resolve([{ name: 'KnownPart1' } as Part]),
          );

        const bomWithUnknownParts = {
          name: 'Test Device',
          location: {
            type: BomLocationType.Onshape,
            documentId,
            workspaceId,
          },
          materials: {
            UnknownPart1: { count: 1 },
            UnknownPart2: { count: 1 },
          },
        } as OnshapeBom;

        const exporter = new OnshapeBomExporter(
          exportId,
          bomWithUnknownParts,
          api,
          exportStatusService,
        );

        const expErr = new OnshapePartsNotFoundError(
          ['UnknownPart1', 'UnknownPart2'],
          'Test Device',
        );
        await expect(exporter.exportBom()).rejects.toEqual(expErr);
      });

      it('throws an OnshapeInvalidBomLocationError for invalid BoM location', async () => {
        const invalidBom = {
          name: 'Test Device',
          location: { document: 'doc' },
          materials: {},
        } as unknown as OnshapeBom;
        await expect(
          () =>
            new OnshapeBomExporter(
              exportId,
              invalidBom,
              api,
              exportStatusService,
            ),
        ).toThrow(expect.any(OnshapeInvalidBomLocationError));
      });
    });
  });
});
