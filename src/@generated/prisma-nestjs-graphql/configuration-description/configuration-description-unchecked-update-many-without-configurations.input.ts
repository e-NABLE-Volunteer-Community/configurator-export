import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumConfigurationDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-configuration-description-kind-field-update-operations.input';

@InputType()
export class ConfigurationDescriptionUncheckedUpdateManyWithoutConfigurationsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => EnumConfigurationDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumConfigurationDescriptionKindFieldUpdateOperationsInput;
}
