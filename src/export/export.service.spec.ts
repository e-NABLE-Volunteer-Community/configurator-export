import { Test, TestingModule } from '@nestjs/testing';
import { ExportService } from './export.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonLokiLoggerModule } from '../logger/winston-loki-logger.module';
import { ExportPackagingService } from './output/export-packaging.service';
import { ExportStatusService } from './status/export-status.service';
import { WinstonLokiLoggerService } from '../logger/winston-loki-logger.service';

describe('ExportService', () => {
  let exportStatusService: ExportStatusService;
  let exportService: ExportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        WinstonLokiLoggerModule,
      ],
      providers: [ExportStatusService, ExportPackagingService, ExportService],
    }).compile();

    const logger = module.get(WinstonLokiLoggerService);
    const configService = module.get(ConfigService);
    exportService = module.get<ExportService>(ExportService);
    exportStatusService = new ExportStatusService(logger, configService);
  });

  // it('Calls appropriate methods on status service', async () => {
  //   const exportQueuedSpy = jest.spyOn(exportStatusService, 'exportQueued');
  //   const exportExportingSpy = jest.spyOn(
  //     exportStatusService,
  //     'exportExporting',
  //   );
  //   const partQueuedSpy = jest.spyOn(exportStatusService, 'partQueued');
  //   const partExportingSpy = jest.spyOn(exportStatusService, 'partExporting');
  //   const partExportedSpy = jest.spyOn(exportStatusService, 'partExported');
  //   const exportExportedSpy = jest.spyOn(exportStatusService, 'exportExported');
  //
  //   const exportId = uuid.v4();
  //   const artifactNames = ['Widget_1', 'Widget_2', 'Widget_3', 'Test3'];
  //
  //   exportService.initiateExport();
  //
  //   expect(exportQueuedSpy).toHaveBeenCalledWith(exportId);
  //   expect(exportExportingSpy).toHaveBeenCalledWith(exportId, artifactNames);
  //   artifactNames.forEach((artifactName) =>
  //     expect(partQueuedSpy).toHaveBeenCalledWith(exportId, artifactName),
  //   );
  //   artifactNames.forEach((artifactName) =>
  //     expect(partExportingSpy).toHaveBeenCalledWith(exportId, artifactName),
  //   );
  //   artifactNames.forEach((artifactName) =>
  //     expect(partExportedSpy).toHaveBeenCalledWith(exportId, artifactName),
  //   );
  //   expect(exportExportedSpy).toHaveBeenCalledWith(exportId);
  // });
});
