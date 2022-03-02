import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateWithoutDeviceAuthorsInput } from './device-update-without-device-authors.input';
import { DeviceCreateWithoutDeviceAuthorsInput } from './device-create-without-device-authors.input';

@InputType()
export class DeviceUpsertWithoutDeviceAuthorsInput {

    @Field(() => DeviceUpdateWithoutDeviceAuthorsInput, {nullable:false})
    update!: DeviceUpdateWithoutDeviceAuthorsInput;

    @Field(() => DeviceCreateWithoutDeviceAuthorsInput, {nullable:false})
    create!: DeviceCreateWithoutDeviceAuthorsInput;
}
