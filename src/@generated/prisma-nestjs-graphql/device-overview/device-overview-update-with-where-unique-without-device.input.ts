import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';
import { DeviceOverviewUpdateWithoutDeviceInput } from './device-overview-update-without-device.input';

@InputType()
export class DeviceOverviewUpdateWithWhereUniqueWithoutDeviceInput {

    @Field(() => DeviceOverviewWhereUniqueInput, {nullable:false})
    where!: DeviceOverviewWhereUniqueInput;

    @Field(() => DeviceOverviewUpdateWithoutDeviceInput, {nullable:false})
    data!: DeviceOverviewUpdateWithoutDeviceInput;
}
