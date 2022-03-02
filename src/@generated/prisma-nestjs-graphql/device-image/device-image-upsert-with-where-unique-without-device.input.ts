import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';
import { DeviceImageUpdateWithoutDeviceInput } from './device-image-update-without-device.input';
import { DeviceImageCreateWithoutDeviceInput } from './device-image-create-without-device.input';

@InputType()
export class DeviceImageUpsertWithWhereUniqueWithoutDeviceInput {

    @Field(() => DeviceImageWhereUniqueInput, {nullable:false})
    where!: DeviceImageWhereUniqueInput;

    @Field(() => DeviceImageUpdateWithoutDeviceInput, {nullable:false})
    update!: DeviceImageUpdateWithoutDeviceInput;

    @Field(() => DeviceImageCreateWithoutDeviceInput, {nullable:false})
    create!: DeviceImageCreateWithoutDeviceInput;
}
