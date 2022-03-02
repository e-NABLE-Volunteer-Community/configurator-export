import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorCreateWithoutDeviceInput } from './device-author-create-without-device.input';

@InputType()
export class DeviceAuthorCreateOrConnectWithoutDeviceInput {

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;

    @Field(() => DeviceAuthorCreateWithoutDeviceInput, {nullable:false})
    create!: DeviceAuthorCreateWithoutDeviceInput;
}
