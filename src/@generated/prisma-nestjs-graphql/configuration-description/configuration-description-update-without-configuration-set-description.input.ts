import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumConfigurationDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-configuration-description-kind-field-update-operations.input';
import { ConfigurationDescriptionOverviewUpdateManyWithoutConfigurationDescriptionInput } from '../configuration-description-overview/configuration-description-overview-update-many-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-update-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionUpdateWithoutConfigurationSetDescriptionInput {

    @Field(() => EnumConfigurationDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumConfigurationDescriptionKindFieldUpdateOperationsInput;

    @Field(() => ConfigurationDescriptionOverviewUpdateManyWithoutConfigurationDescriptionInput, {nullable:true})
    overviews?: ConfigurationDescriptionOverviewUpdateManyWithoutConfigurationDescriptionInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingUpdateManyWithoutConfigurationDescriptionInput;
}
