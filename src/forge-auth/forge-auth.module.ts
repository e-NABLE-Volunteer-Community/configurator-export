import { Module } from '@nestjs/common';
import { ForgeAuthController } from './forge-auth.controller';
import { ForgeAuthService } from './forge-auth.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [ForgeAuthController],
  providers: [ForgeAuthService],
})
export class ForgeAuthModule {}
