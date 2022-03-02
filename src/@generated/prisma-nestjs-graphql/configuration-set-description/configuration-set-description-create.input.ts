import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCreateNestedManyWithoutConfigurationSetDescriptionInput } from '../configuration-set-description-overview/configuration-set-description-overview-create-nested-many-without-configuration-set-description.input';
import { ConfigurationDescriptionCreateNestedManyWithoutConfigurationSetDescriptionInput } from '../configuration-description/configuration-description-create-nested-many-without-configuration-set-description.input';
import { DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../device/device-create-nested-many-without-measurement-set-description.input';
import { DeviceCreateNestedManyWithoutOptionSetDescriptionInput } from '../device/device-create-nested-many-without-option-set-description.input';

@InputType()
export class ConfigurationSetDescriptionCreateInput {

    @Field(() => ConfigurationSetDescriptionOverviewCreateNestedManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    overviews?: ConfigurationSetDescriptionOverviewCreateNestedManyWithoutConfigurationSetDescriptionInput;

    @Field(() => ConfigurationDescriptionCreateNestedManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    configurations?: ConfigurationDescriptionCreateNestedManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    deviceMeasurements?: DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceCreateNestedManyWithoutOptionSetDescriptionInput, {nullable:true})
    deviceOptions?: DeviceCreateNestedManyWithoutOptionSetDescriptionInput;
}
