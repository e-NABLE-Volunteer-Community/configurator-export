import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumConfigurationDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-configuration-description-kind-field-update-operations.input';
import { ConfigurationDescriptionOverviewUncheckedUpdateManyWithoutConfigurationDescriptionInput } from '../configuration-description-overview/configuration-description-overview-unchecked-update-many-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-unchecked-update-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    configurationSetDescriptionId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumConfigurationDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumConfigurationDescriptionKindFieldUpdateOperationsInput;

    @Field(() => ConfigurationDescriptionOverviewUncheckedUpdateManyWithoutConfigurationDescriptionInput, {nullable:true})
    overviews?: ConfigurationDescriptionOverviewUncheckedUpdateManyWithoutConfigurationDescriptionInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingUncheckedUpdateManyWithoutConfigurationDescriptionInput;
}
