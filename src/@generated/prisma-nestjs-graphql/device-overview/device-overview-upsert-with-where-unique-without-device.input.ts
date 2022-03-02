import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';
import { DeviceOverviewUpdateWithoutDeviceInput } from './device-overview-update-without-device.input';
import { DeviceOverviewCreateWithoutDeviceInput } from './device-overview-create-without-device.input';

@InputType()
export class DeviceOverviewUpsertWithWhereUniqueWithoutDeviceInput {

    @Field(() => DeviceOverviewWhereUniqueInput, {nullable:false})
    where!: DeviceOverviewWhereUniqueInput;

    @Field(() => DeviceOverviewUpdateWithoutDeviceInput, {nullable:false})
    update!: DeviceOverviewUpdateWithoutDeviceInput;

    @Field(() => DeviceOverviewCreateWithoutDeviceInput, {nullable:false})
    create!: DeviceOverviewCreateWithoutDeviceInput;
}
