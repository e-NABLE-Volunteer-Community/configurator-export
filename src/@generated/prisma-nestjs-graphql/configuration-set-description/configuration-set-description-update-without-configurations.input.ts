import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-set-description-overview/configuration-set-description-overview-update-many-without-configuration-set-description.input';
import { DeviceUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-update-many-without-measurement-set-description.input';
import { DeviceUpdateManyWithoutOptionSetDescriptionInput } from '../device/device-update-many-without-option-set-description.input';

@InputType()
export class ConfigurationSetDescriptionUpdateWithoutConfigurationsInput {

    @Field(() => ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    overviews?: ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    deviceMeasurements?: DeviceUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutOptionSetDescriptionInput, {nullable:true})
    deviceOptions?: DeviceUpdateManyWithoutOptionSetDescriptionInput;
}
