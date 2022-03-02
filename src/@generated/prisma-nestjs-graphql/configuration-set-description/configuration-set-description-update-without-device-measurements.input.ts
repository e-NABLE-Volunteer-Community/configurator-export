import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-set-description-overview/configuration-set-description-overview-update-many-without-configuration-set-description.input';
import { ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-description/configuration-description-update-many-without-configuration-set-description.input';
import { DeviceUpdateManyWithoutOptionSetDescriptionInput } from '../device/device-update-many-without-option-set-description.input';

@InputType()
export class ConfigurationSetDescriptionUpdateWithoutDeviceMeasurementsInput {

    @Field(() => ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    overviews?: ConfigurationSetDescriptionOverviewUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    configurations?: ConfigurationDescriptionUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutOptionSetDescriptionInput, {nullable:true})
    deviceOptions?: DeviceUpdateManyWithoutOptionSetDescriptionInput;
}
