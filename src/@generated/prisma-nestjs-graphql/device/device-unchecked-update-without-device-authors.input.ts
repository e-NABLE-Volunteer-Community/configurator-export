import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ComponentUncheckedUpdateManyWithoutDeviceInput } from '../component/component-unchecked-update-many-without-device.input';
import { DeviceExtraUncheckedUpdateManyWithoutDeviceInput } from '../device-extra/device-extra-unchecked-update-many-without-device.input';
import { DeviceImageUncheckedUpdateManyWithoutDeviceInput } from '../device-image/device-image-unchecked-update-many-without-device.input';
import { DeviceOverviewUncheckedUpdateManyWithoutDeviceInput } from '../device-overview/device-overview-unchecked-update-many-without-device.input';

@InputType()
export class DeviceUncheckedUpdateWithoutDeviceAuthorsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    measurementSetDescriptionId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    optionSetDescriptionId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ComponentUncheckedUpdateManyWithoutDeviceInput, {nullable:true})
    components?: ComponentUncheckedUpdateManyWithoutDeviceInput;

    @Field(() => DeviceExtraUncheckedUpdateManyWithoutDeviceInput, {nullable:true})
    deviceExtras?: DeviceExtraUncheckedUpdateManyWithoutDeviceInput;

    @Field(() => DeviceImageUncheckedUpdateManyWithoutDeviceInput, {nullable:true})
    deviceImages?: DeviceImageUncheckedUpdateManyWithoutDeviceInput;

    @Field(() => DeviceOverviewUncheckedUpdateManyWithoutDeviceInput, {nullable:true})
    deviceOverviews?: DeviceOverviewUncheckedUpdateManyWithoutDeviceInput;
}
