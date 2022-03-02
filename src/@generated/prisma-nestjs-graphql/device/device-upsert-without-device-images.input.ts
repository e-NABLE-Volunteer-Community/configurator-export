import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateWithoutDeviceImagesInput } from './device-update-without-device-images.input';
import { DeviceCreateWithoutDeviceImagesInput } from './device-create-without-device-images.input';

@InputType()
export class DeviceUpsertWithoutDeviceImagesInput {

    @Field(() => DeviceUpdateWithoutDeviceImagesInput, {nullable:false})
    update!: DeviceUpdateWithoutDeviceImagesInput;

    @Field(() => DeviceCreateWithoutDeviceImagesInput, {nullable:false})
    create!: DeviceCreateWithoutDeviceImagesInput;
}
