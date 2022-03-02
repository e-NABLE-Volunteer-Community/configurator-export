import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';
import { DeviceExtraUpdateWithoutDeviceInput } from './device-extra-update-without-device.input';
import { DeviceExtraCreateWithoutDeviceInput } from './device-extra-create-without-device.input';

@InputType()
export class DeviceExtraUpsertWithWhereUniqueWithoutDeviceInput {

    @Field(() => DeviceExtraWhereUniqueInput, {nullable:false})
    where!: DeviceExtraWhereUniqueInput;

    @Field(() => DeviceExtraUpdateWithoutDeviceInput, {nullable:false})
    update!: DeviceExtraUpdateWithoutDeviceInput;

    @Field(() => DeviceExtraCreateWithoutDeviceInput, {nullable:false})
    create!: DeviceExtraCreateWithoutDeviceInput;
}
