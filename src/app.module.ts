import { Module } from '@nestjs/common';
import { ExportModule } from './export/export.module';
import { ConfigModule } from '@nestjs/config';
import { WinstonLokiLoggerModule } from './logger/winston-loki-logger.module';
import { ExportStatusModule } from './export/status/export-status.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WinstonLokiLoggerModule,
    ExportStatusModule,
    ExportModule,
  ],
})
export class AppModule {}
