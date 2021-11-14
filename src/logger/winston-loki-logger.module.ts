import { Global, Module } from '@nestjs/common';
import { WinstonLokiLoggerService } from './winston-loki-logger.service';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigService],
  providers: [WinstonLokiLoggerService],
  exports: [WinstonLokiLoggerService],
})
export class WinstonLokiLoggerModule {}
