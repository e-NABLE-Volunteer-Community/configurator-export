import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorUpdateWithoutDeviceInput } from './device-author-update-without-device.input';
import { DeviceAuthorCreateWithoutDeviceInput } from './device-author-create-without-device.input';

@InputType()
export class DeviceAuthorUpsertWithWhereUniqueWithoutDeviceInput {

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;

    @Field(() => DeviceAuthorUpdateWithoutDeviceInput, {nullable:false})
    update!: DeviceAuthorUpdateWithoutDeviceInput;

    @Field(() => DeviceAuthorCreateWithoutDeviceInput, {nullable:false})
    create!: DeviceAuthorCreateWithoutDeviceInput;
}
