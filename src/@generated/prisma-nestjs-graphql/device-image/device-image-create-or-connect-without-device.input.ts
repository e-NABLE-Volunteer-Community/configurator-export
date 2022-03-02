import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';
import { DeviceImageCreateWithoutDeviceInput } from './device-image-create-without-device.input';

@InputType()
export class DeviceImageCreateOrConnectWithoutDeviceInput {

    @Field(() => DeviceImageWhereUniqueInput, {nullable:false})
    where!: DeviceImageWhereUniqueInput;

    @Field(() => DeviceImageCreateWithoutDeviceInput, {nullable:false})
    create!: DeviceImageCreateWithoutDeviceInput;
}
