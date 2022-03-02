import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateOneRequiredWithoutDeviceAuthorsInput } from '../device/device-update-one-required-without-device-authors.input';

@InputType()
export class DeviceAuthorUpdateWithoutAuthorInput {

    @Field(() => DeviceUpdateOneRequiredWithoutDeviceAuthorsInput, {nullable:true})
    device?: DeviceUpdateOneRequiredWithoutDeviceAuthorsInput;
}
