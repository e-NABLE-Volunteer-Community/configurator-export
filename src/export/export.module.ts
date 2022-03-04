import { Module } from '@nestjs/common';
import { ExportService } from './export.service';
import { ExportController } from './export.controller';
import { WinstonLokiLoggerModule } from '../logger/winston-loki-logger.module';
import { ExportStatusModule } from './status/export-status.module';
import { ExportOutputModule } from '../export-output/export-output.module';
import { ExportPackagingService } from './output/export-packaging.service';

@Module({
  imports: [WinstonLokiLoggerModule, ExportStatusModule],
  controllers: [ExportController],
  providers: [ExportService, ExportPackagingService],
})
export class ExportModule {}
