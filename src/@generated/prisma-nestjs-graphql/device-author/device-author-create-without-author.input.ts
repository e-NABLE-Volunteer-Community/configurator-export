import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateNestedOneWithoutDeviceAuthorsInput } from '../device/device-create-nested-one-without-device-authors.input';

@InputType()
export class DeviceAuthorCreateWithoutAuthorInput {

    @Field(() => DeviceCreateNestedOneWithoutDeviceAuthorsInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutDeviceAuthorsInput;
}
