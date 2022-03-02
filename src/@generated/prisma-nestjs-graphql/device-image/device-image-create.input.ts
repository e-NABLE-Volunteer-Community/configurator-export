import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateNestedOneWithoutDeviceImagesInput } from '../device/device-create-nested-one-without-device-images.input';

@InputType()
export class DeviceImageCreateInput {

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:true})
    locale?: string;

    @Field(() => DeviceCreateNestedOneWithoutDeviceImagesInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutDeviceImagesInput;
}
