import { WinstonLokiLoggerModule } from '../logger/winston-loki-logger.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { OnshapeAuthController } from './onshape-auth.controller';
import { OnshapeAuthService } from './onshape-auth.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [WinstonLokiLoggerModule, ConfigModule, HttpModule],
  providers: [OnshapeAuthService],
  controllers: [OnshapeAuthController],
})
export class OnshapeAuthModule {}
