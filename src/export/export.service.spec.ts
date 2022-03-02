import { Test, TestingModule } from '@nestjs/testing';
import { ExportService } from './export.service';
import { ConfigModule } from '@nestjs/config';
import { WinstonLokiLoggerModule } from '../logger/winston-loki-logger.module';
import { ExportPackagingService } from './output/export-packaging.service';
import { ExporterFactoryRegistry } from './exporter-factory-registry';
import { ExportStatusService } from './status/export-status.service';

describe('ExportService', () => {
  let service: ExportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        WinstonLokiLoggerModule,
      ],
      providers: [
        ExportStatusService,
        ExportPackagingService,
        ExporterFactoryRegistry,
        ExportService,
      ],
    }).compile();

    service = module.get<ExportService>(ExportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
