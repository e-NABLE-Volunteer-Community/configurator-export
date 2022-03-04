import { Module } from '@nestjs/common';
import { WinstonLokiLoggerModule } from '../logger/winston-loki-logger.module';
import { ExportStatusModule } from '../export/status/export-status.module';
import { ExportController } from '../export/export.controller';
import { ExportService } from '../export/export.service';
import { ExportOutputController } from './export-output.controller';
import { ExportPackagingService } from '../export/output/export-packaging.service';

@Module({
  imports: [WinstonLokiLoggerModule, ExportStatusModule],
  controllers: [ExportOutputController],
  providers: [ExportPackagingService],
})
export class ExportOutputModule {}
