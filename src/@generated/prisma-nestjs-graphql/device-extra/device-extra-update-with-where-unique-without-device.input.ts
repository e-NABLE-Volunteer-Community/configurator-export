import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';
import { DeviceExtraUpdateWithoutDeviceInput } from './device-extra-update-without-device.input';

@InputType()
export class DeviceExtraUpdateWithWhereUniqueWithoutDeviceInput {

    @Field(() => DeviceExtraWhereUniqueInput, {nullable:false})
    where!: DeviceExtraWhereUniqueInput;

    @Field(() => DeviceExtraUpdateWithoutDeviceInput, {nullable:false})
    data!: DeviceExtraUpdateWithoutDeviceInput;
}
