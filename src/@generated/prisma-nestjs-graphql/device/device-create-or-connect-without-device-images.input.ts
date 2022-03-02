import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceCreateWithoutDeviceImagesInput } from './device-create-without-device-images.input';

@InputType()
export class DeviceCreateOrConnectWithoutDeviceImagesInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceCreateWithoutDeviceImagesInput, {nullable:false})
    create!: DeviceCreateWithoutDeviceImagesInput;
}
