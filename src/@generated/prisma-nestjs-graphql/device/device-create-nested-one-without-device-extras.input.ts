import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceExtrasInput } from './device-create-without-device-extras.input';
import { DeviceCreateOrConnectWithoutDeviceExtrasInput } from './device-create-or-connect-without-device-extras.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedOneWithoutDeviceExtrasInput {

    @Field(() => DeviceCreateWithoutDeviceExtrasInput, {nullable:true})
    create?: DeviceCreateWithoutDeviceExtrasInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceExtrasInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceExtrasInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;
}
