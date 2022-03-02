import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-set-description-overview/configuration-set-description-overview-update-many-without-configuration-set-description.input';
import { ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-description/configuration-description-update-many-without-configuration-set-description.input';
import { DeviceUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-update-many-without-measurement-set-description.input';

@InputType()
export class ConfigurationSetDescriptionUpdateWithoutDeviceOptionsInput {

    @Field(() => ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    overviews?: ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    configurations?: ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    deviceMeasurements?: DeviceUpdateManyWithoutMeasurementSetDescriptionInput;
}
