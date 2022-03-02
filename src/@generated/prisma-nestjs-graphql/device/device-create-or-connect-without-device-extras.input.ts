import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceCreateWithoutDeviceExtrasInput } from './device-create-without-device-extras.input';

@InputType()
export class DeviceCreateOrConnectWithoutDeviceExtrasInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceCreateWithoutDeviceExtrasInput, {nullable:false})
    create!: DeviceCreateWithoutDeviceExtrasInput;
}
