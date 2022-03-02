import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumConfigurationDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-configuration-description-kind-field-update-operations.input';
import { ConfigurationSetDescriptionUpdateOneRequiredWithoutConfigurationsInput } from '../configuration-set-description/configuration-set-description-update-one-required-without-configurations.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-update-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionUpdateWithoutOverviewsInput {

    @Field(() => EnumConfigurationDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumConfigurationDescriptionKindFieldUpdateOperationsInput;

    @Field(() => ConfigurationSetDescriptionUpdateOneRequiredWithoutConfigurationsInput, {nullable:true})
    configurationSetDescription?: ConfigurationSetDescriptionUpdateOneRequiredWithoutConfigurationsInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput;
}
