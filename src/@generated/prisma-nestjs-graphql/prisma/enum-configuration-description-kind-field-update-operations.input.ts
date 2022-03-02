import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from './configuration-description-kind.enum';

@InputType()
export class EnumConfigurationDescriptionKindFieldUpdateOperationsInput {

    @Field(() => ConfigurationDescriptionKind, {nullable:true})
    set?: keyof typeof ConfigurationDescriptionKind;
}
