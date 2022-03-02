import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';
import { DeviceImageUpdateWithoutDeviceInput } from './device-image-update-without-device.input';

@InputType()
export class DeviceImageUpdateWithWhereUniqueWithoutDeviceInput {

    @Field(() => DeviceImageWhereUniqueInput, {nullable:false})
    where!: DeviceImageWhereUniqueInput;

    @Field(() => DeviceImageUpdateWithoutDeviceInput, {nullable:false})
    data!: DeviceImageUpdateWithoutDeviceInput;
}
