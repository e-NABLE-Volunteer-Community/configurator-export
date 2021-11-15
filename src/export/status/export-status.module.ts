import { Module } from '@nestjs/common';
import { WinstonLokiLoggerService } from '../../logger/winston-loki-logger.service';
import { ConfigService } from '@nestjs/config';
import { ExportStatusService } from './export-status.service';
import { ExportStatusGateway } from './export-status.gateway';

@Module({
  imports: [WinstonLokiLoggerService, ConfigService],
  providers: [ExportStatusService, ExportStatusGateway],
  exports: [ExportStatusService],
})
export class ExportStatusModule {}
