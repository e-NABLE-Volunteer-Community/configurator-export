import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOneDeviceArgs } from '../@generated/prisma-nestjs-graphql/device/create-one-device.args';
import { UpdateOneDeviceArgs } from '../@generated/prisma-nestjs-graphql/device/update-one-device.args';

@Injectable()
export class DevicesService {
  constructor(private readonly prisma: PrismaService) {}

  create(args: CreateOneDeviceArgs) {
    return this.prisma.device.create(args);
  }

  findAll() {
    return this.prisma.device.findMany();
  }

  findById(id: number) {
    return this.prisma.device.findUnique({ where: { id } });
  }

  // update(args: UpdateOneDeviceArgs) {
  //   return this.prisma.device.update(args);
  // }

  remove(id: number) {
    return this.prisma.device.delete({ where: { id } });
  }
}
