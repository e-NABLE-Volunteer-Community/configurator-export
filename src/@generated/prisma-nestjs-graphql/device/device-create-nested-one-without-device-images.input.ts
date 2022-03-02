import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceImagesInput } from './device-create-without-device-images.input';
import { DeviceCreateOrConnectWithoutDeviceImagesInput } from './device-create-or-connect-without-device-images.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedOneWithoutDeviceImagesInput {

    @Field(() => DeviceCreateWithoutDeviceImagesInput, {nullable:true})
    create?: DeviceCreateWithoutDeviceImagesInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceImagesInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceImagesInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;
}
