import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateWithoutDeviceExtrasInput } from './device-update-without-device-extras.input';
import { DeviceCreateWithoutDeviceExtrasInput } from './device-create-without-device-extras.input';

@InputType()
export class DeviceUpsertWithoutDeviceExtrasInput {

    @Field(() => DeviceUpdateWithoutDeviceExtrasInput, {nullable:false})
    update!: DeviceUpdateWithoutDeviceExtrasInput;

    @Field(() => DeviceCreateWithoutDeviceExtrasInput, {nullable:false})
    create!: DeviceCreateWithoutDeviceExtrasInput;
}
