import { Module } from '@nestjs/common';
import { ExportService } from './export.service';
import { ExportController } from './export.controller';
import { ExporterFactoryRegistry } from './exporter-factory-registry';
import { WinstonLokiLoggerModule } from 'src/logger/winston-loki-logger.module';
import { ExportStatusModule } from './status/export-status.module';
import { ExportOutputService } from './output/export-output.service';

@Module({
  imports: [WinstonLokiLoggerModule, ExportStatusModule],
  controllers: [ExportController],
  providers: [ExportOutputService, ExportService, ExporterFactoryRegistry],
})
export class ExportModule {}
