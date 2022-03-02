import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';
import { DeviceExtraCreateWithoutDeviceInput } from './device-extra-create-without-device.input';

@InputType()
export class DeviceExtraCreateOrConnectWithoutDeviceInput {

    @Field(() => DeviceExtraWhereUniqueInput, {nullable:false})
    where!: DeviceExtraWhereUniqueInput;

    @Field(() => DeviceExtraCreateWithoutDeviceInput, {nullable:false})
    create!: DeviceExtraCreateWithoutDeviceInput;
}
