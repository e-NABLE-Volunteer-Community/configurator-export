import { Module } from '@nestjs/common';
import { ExportService } from './export.service';
import { ExportController } from './export.controller';
import { ExporterFactoryRegistry } from './exporter-factory-registry';
import { WinstonLokiLoggerModule } from '../logger/winston-loki-logger.module';
import { ExportStatusModule } from './status/export-status.module';
import { ExportPackagingService } from './output/export-packaging.service';

@Module({
  imports: [WinstonLokiLoggerModule, ExportStatusModule],
  controllers: [ExportController],
  providers: [ExportPackagingService, ExportService, ExporterFactoryRegistry],
})
export class ExportModule {}
