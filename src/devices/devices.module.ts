import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesResolver } from './devices.resolver';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DevicesResolver, DevicesService],
})
export class DevicesModule {}
