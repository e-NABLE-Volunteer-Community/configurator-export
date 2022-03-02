import { Global, Module } from '@nestjs/common';
import { WinstonLokiLoggerService } from './winston-loki-logger.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [WinstonLokiLoggerService],
  exports: [WinstonLokiLoggerService],
})
export class WinstonLokiLoggerModule {}
