import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ComponentUpdateManyWithoutDeviceInput } from '../component/component-update-many-without-device.input';
import { DeviceExtraUpdateManyWithoutDeviceInput } from '../device-extra/device-extra-update-many-without-device.input';
import { DeviceImageUpdateManyWithoutDeviceInput } from '../device-image/device-image-update-many-without-device.input';
import { DeviceOverviewUpdateManyWithoutDeviceInput } from '../device-overview/device-overview-update-many-without-device.input';
import { ConfigurationSetDescriptionUpdateOneWithoutDeviceMeasurementsInput } from '../configuration-set-description/configuration-set-description-update-one-without-device-measurements.input';
import { ConfigurationSetDescriptionUpdateOneWithoutDeviceOptionsInput } from '../configuration-set-description/configuration-set-description-update-one-without-device-options.input';

@InputType()
export class DeviceUpdateWithoutDeviceAuthorsInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ComponentUpdateManyWithoutDeviceInput, {nullable:true})
    components?: ComponentUpdateManyWithoutDeviceInput;

    @Field(() => DeviceExtraUpdateManyWithoutDeviceInput, {nullable:true})
    deviceExtras?: DeviceExtraUpdateManyWithoutDeviceInput;

    @Field(() => DeviceImageUpdateManyWithoutDeviceInput, {nullable:true})
    deviceImages?: DeviceImageUpdateManyWithoutDeviceInput;

    @Field(() => DeviceOverviewUpdateManyWithoutDeviceInput, {nullable:true})
    deviceOverviews?: DeviceOverviewUpdateManyWithoutDeviceInput;

    @Field(() => ConfigurationSetDescriptionUpdateOneWithoutDeviceMeasurementsInput, {nullable:true})
    measurementSetDescription?: ConfigurationSetDescriptionUpdateOneWithoutDeviceMeasurementsInput;

    @Field(() => ConfigurationSetDescriptionUpdateOneWithoutDeviceOptionsInput, {nullable:true})
    optionSetDescription?: ConfigurationSetDescriptionUpdateOneWithoutDeviceOptionsInput;
}
