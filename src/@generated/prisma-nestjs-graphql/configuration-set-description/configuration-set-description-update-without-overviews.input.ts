import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-description/configuration-description-update-many-without-configuration-set-description.input';
import { DeviceUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-update-many-without-measurement-set-description.input';
import { DeviceUpdateManyWithoutOptionSetDescriptionInput } from '../device/device-update-many-without-option-set-description.input';

@InputType()
export class ConfigurationSetDescriptionUpdateWithoutOverviewsInput {

    @Field(() => ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    configurations?: ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    deviceMeasurements?: DeviceUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutOptionSetDescriptionInput, {nullable:true})
    deviceOptions?: DeviceUpdateManyWithoutOptionSetDescriptionInput;
}
