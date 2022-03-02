import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorUpdateWithoutDeviceInput } from './device-author-update-without-device.input';

@InputType()
export class DeviceAuthorUpdateWithWhereUniqueWithoutDeviceInput {

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:false})
    where!: DeviceAuthorWhereUniqueInput;

    @Field(() => DeviceAuthorUpdateWithoutDeviceInput, {nullable:false})
    data!: DeviceAuthorUpdateWithoutDeviceInput;
}
