import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateNestedManyWithoutDeviceInput } from '../component/component-create-nested-many-without-device.input';
import { DeviceExtraCreateNestedManyWithoutDeviceInput } from '../device-extra/device-extra-create-nested-many-without-device.input';
import { DeviceImageCreateNestedManyWithoutDeviceInput } from '../device-image/device-image-create-nested-many-without-device.input';
import { DeviceOverviewCreateNestedManyWithoutDeviceInput } from '../device-overview/device-overview-create-nested-many-without-device.input';
import { ConfigurationSetDescriptionCreateNestedOneWithoutDeviceMeasurementsInput } from '../configuration-set-description/configuration-set-description-create-nested-one-without-device-measurements.input';
import { ConfigurationSetDescriptionCreateNestedOneWithoutDeviceOptionsInput } from '../configuration-set-description/configuration-set-description-create-nested-one-without-device-options.input';

@InputType()
export class DeviceCreateWithoutDeviceAuthorsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => ComponentCreateNestedManyWithoutDeviceInput, {nullable:true})
    components?: ComponentCreateNestedManyWithoutDeviceInput;

    @Field(() => DeviceExtraCreateNestedManyWithoutDeviceInput, {nullable:true})
    deviceExtras?: DeviceExtraCreateNestedManyWithoutDeviceInput;

    @Field(() => DeviceImageCreateNestedManyWithoutDeviceInput, {nullable:true})
    deviceImages?: DeviceImageCreateNestedManyWithoutDeviceInput;

    @Field(() => DeviceOverviewCreateNestedManyWithoutDeviceInput, {nullable:true})
    deviceOverviews?: DeviceOverviewCreateNestedManyWithoutDeviceInput;

    @Field(() => ConfigurationSetDescriptionCreateNestedOneWithoutDeviceMeasurementsInput, {nullable:true})
    measurementSetDescription?: ConfigurationSetDescriptionCreateNestedOneWithoutDeviceMeasurementsInput;

    @Field(() => ConfigurationSetDescriptionCreateNestedOneWithoutDeviceOptionsInput, {nullable:true})
    optionSetDescription?: ConfigurationSetDescriptionCreateNestedOneWithoutDeviceOptionsInput;
}
