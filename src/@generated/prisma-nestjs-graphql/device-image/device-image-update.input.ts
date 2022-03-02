import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DeviceUpdateOneRequiredWithoutDeviceImagesInput } from '../device/device-update-one-required-without-device-images.input';

@InputType()
export class DeviceImageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    image?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    locale?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DeviceUpdateOneRequiredWithoutDeviceImagesInput, {nullable:true})
    device?: DeviceUpdateOneRequiredWithoutDeviceImagesInput;
}
