import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceOverviewsInput } from './device-create-without-device-overviews.input';
import { DeviceCreateOrConnectWithoutDeviceOverviewsInput } from './device-create-or-connect-without-device-overviews.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedOneWithoutDeviceOverviewsInput {

    @Field(() => DeviceCreateWithoutDeviceOverviewsInput, {nullable:true})
    create?: DeviceCreateWithoutDeviceOverviewsInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceOverviewsInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceOverviewsInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;
}
