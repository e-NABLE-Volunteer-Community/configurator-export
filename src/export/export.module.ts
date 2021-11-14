import { Module } from '@nestjs/common';
import { ExportService } from './export.service';
import { ExportController } from './export.controller';
import { ExporterFactoryRegistry } from './exporter-factory-registry';
import { WinstonLokiLoggerModule } from 'src/logger/winston-loki-logger.module';

@Module({
  imports: [WinstonLokiLoggerModule],
  controllers: [ExportController],
  providers: [ExportService, ExporterFactoryRegistry],
})
export class ExportModule {}
