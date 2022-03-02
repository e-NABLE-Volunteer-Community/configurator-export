import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumConfigurationDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-configuration-description-kind-field-update-operations.input';
import { ConfigurationSetDescriptionUpdateOneRequiredWithoutConfigurationsInput } from '../configuration-set-description/configuration-set-description-update-one-required-without-configurations.input';
import { ConfigurationDescriptionOverviewUpdateManyWithoutConfigurationDescriptionInput } from '../configuration-description-overview/configuration-description-overview-update-many-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-update-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionUpdateInput {

    @Field(() => EnumConfigurationDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumConfigurationDescriptionKindFieldUpdateOperationsInput;

    @Field(() => ConfigurationSetDescriptionUpdateOneRequiredWithoutConfigurationsInput, {nullable:true})
    configurationSetDescription?: ConfigurationSetDescriptionUpdateOneRequiredWithoutConfigurationsInput;

    @Field(() => ConfigurationDescriptionOverviewUpdateManyWithoutConfigurationDescriptionInput, {nullable:true})
    overviews?: ConfigurationDescriptionOverviewUpdateManyWithoutConfigurationDescriptionInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput;
}
