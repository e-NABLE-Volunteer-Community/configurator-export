import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumConfigurationDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-configuration-description-kind-field-update-operations.input';

@InputType()
export class ConfigurationDescriptionUpdateManyMutationInput {

    @Field(() => EnumConfigurationDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumConfigurationDescriptionKindFieldUpdateOperationsInput;
}
