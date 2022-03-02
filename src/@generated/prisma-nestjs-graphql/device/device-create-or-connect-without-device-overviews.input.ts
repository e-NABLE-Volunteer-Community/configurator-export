import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceCreateWithoutDeviceOverviewsInput } from './device-create-without-device-overviews.input';

@InputType()
export class DeviceCreateOrConnectWithoutDeviceOverviewsInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceCreateWithoutDeviceOverviewsInput, {nullable:false})
    create!: DeviceCreateWithoutDeviceOverviewsInput;
}
