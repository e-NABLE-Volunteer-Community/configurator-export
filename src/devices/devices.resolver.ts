import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOneDeviceArgs } from '../@generated/prisma-nestjs-graphql/device/create-one-device.args';
import { Device } from '../@generated/prisma-nestjs-graphql/device/device.model';
import { DevicesService } from './devices.service';
import { UpdateOneDeviceArgs } from '../@generated/prisma-nestjs-graphql/device/update-one-device.args';

@Resolver(() => Device)
export class DevicesResolver {
  constructor(private readonly devicesService: DevicesService) {}

  @Mutation(() => Device)
  createDevice(@Args() args: CreateOneDeviceArgs) {
    return this.devicesService.create(args);
  }

  @Query(() => [Device], { name: 'devices' })
  findAll() {
    return this.devicesService.findAll();
  }

  @Query(() => Device, { name: 'device' })
  findById(@Args('id', { type: () => Int }) id: number) {
    return this.devicesService.findById(id);
  }

  // TODO: Search
  //
  // @Query(() => [Device], { name: 'device' })
  // findWhere(
  //   @Args('where', { type: () => DeviceWhereInput }) where: DeviceWhereInput,
  // ) {
  //   return this.devicesService.
  // }

  // @Mutation(() => Device)
  // updateDevice(@Args() args: UpdateOneDeviceArgs) {
  //   return this.devicesService.update(args);
  // }

  @Mutation(() => Device)
  removeDevice(@Args('id', { type: () => Int }) id: number) {
    return this.devicesService.remove(id);
  }
}
