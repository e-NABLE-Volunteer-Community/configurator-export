import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DeviceUpdateOneRequiredWithoutDeviceOverviewsInput } from '../device/device-update-one-required-without-device-overviews.input';

@InputType()
export class DeviceOverviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locale?: StringFieldUpdateOperationsInput;

    @Field(() => DeviceUpdateOneRequiredWithoutDeviceOverviewsInput, {nullable:true})
    device?: DeviceUpdateOneRequiredWithoutDeviceOverviewsInput;
}
