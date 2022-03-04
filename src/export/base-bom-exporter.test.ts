import { ExportStatusService } from './status/export-status.service';
import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { WinstonLokiLoggerService } from '../logger/winston-loki-logger.service';
import * as uuid from 'uuid';
import { Fusion360Bom } from './fusion-360/fusion360-bom-exporter';
import { BomLocationType } from './exporter-factory-registry';
import { BaseBomExporter } from './base-bom-exporter';
import { PartName } from './onshape-api/onshape-types';
import { BomInstance } from '../bom-types-and-schemas';
import * as R from 'ramda';

//<editor-fold desc="Test data">
const validBom: Fusion360Bom = {
  name: 'Test Device',
  location: {
    type: BomLocationType.Fusion360,
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
//</editor-fold>

describe('BaseBomExporter', () => {
  let exportStatusService: ExportStatusService;
  const init = async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConfigService],
      providers: [ConfigService, WinstonLokiLoggerService],
    }).compile();
    const logger = moduleRef.get(WinstonLokiLoggerService);
    const configService = moduleRef.get(ConfigService);
    jest.spyOn(configService, 'get').mockImplementation(() => '10');
    exportStatusService = new ExportStatusService(logger, configService);
  };

  beforeEach(init);

  it('Calls appropriate methods on status service', async () => {
    const exportQueuedSpy = jest.spyOn(exportStatusService, 'exportQueued');
    const exportExportingSpy = jest.spyOn(
      exportStatusService,
      'exportExporting',
    );
    const partQueuedSpy = jest.spyOn(exportStatusService, 'partQueued');
    const partExportingSpy = jest.spyOn(exportStatusService, 'partExporting');
    const partExportedSpy = jest.spyOn(exportStatusService, 'partExported');
    const exportExportedSpy = jest.spyOn(exportStatusService, 'exportExported');

    const exportId = uuid.v4();
    const artifactNames = ['Widget_1', 'Widget_2', 'Widget_3', 'Test3'];

    const bomExporter = new TestBomExporter(
      exportId,
      validBom,
      exportStatusService,
    );
    await bomExporter.exportBom();

    expect(exportQueuedSpy).toHaveBeenCalledWith(exportId);
    expect(exportExportingSpy).toHaveBeenCalledWith(exportId, artifactNames);
    artifactNames.forEach((artifactName) =>
      expect(partQueuedSpy).toHaveBeenCalledWith(exportId, artifactName),
    );
    artifactNames.forEach((artifactName) =>
      expect(partExportingSpy).toHaveBeenCalledWith(exportId, artifactName),
    );
    artifactNames.forEach((artifactName) =>
      expect(partExportedSpy).toHaveBeenCalledWith(exportId, artifactName),
    );
    expect(exportExportedSpy).toHaveBeenCalledWith(exportId);
  });

  it('Returns correct files', async () => {
    const exportId = uuid.v4();
    const bomExporter = new TestBomExporter(
      exportId,
      validBom,
      exportStatusService,
    );
    const files = await bomExporter.exportBom();
    const expFileNames = [
      'Widget_1.stl',
      'Widget_2.stl',
      'Widget_3.stl',
      'Test3-0.stl',
      'Test3-1.stl',
    ];
    expect(files.map(R.prop('name'))).toStrictEqual(expFileNames);
  });
});
