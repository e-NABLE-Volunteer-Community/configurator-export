import { Module } from '@nestjs/common';
import { ExportModule } from './export/export.module';
import { ConfigModule } from '@nestjs/config';
import { WinstonLokiLoggerModule } from './logger/winston-loki-logger.module';

@Module({
  imports: [
    WinstonLokiLoggerModule,
    ExportModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
