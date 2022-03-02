import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';
import { DeviceOverviewCreateWithoutDeviceInput } from './device-overview-create-without-device.input';

@InputType()
export class DeviceOverviewCreateOrConnectWithoutDeviceInput {

    @Field(() => DeviceOverviewWhereUniqueInput, {nullable:false})
    where!: DeviceOverviewWhereUniqueInput;

    @Field(() => DeviceOverviewCreateWithoutDeviceInput, {nullable:false})
    create!: DeviceOverviewCreateWithoutDeviceInput;
}
