import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from './configuration-description-kind.enum';

@InputType()
export class NestedEnumConfigurationDescriptionKindFilter {

    @Field(() => ConfigurationDescriptionKind, {nullable:true})
    equals?: keyof typeof ConfigurationDescriptionKind;

    @Field(() => [ConfigurationDescriptionKind], {nullable:true})
    in?: Array<keyof typeof ConfigurationDescriptionKind>;

    @Field(() => [ConfigurationDescriptionKind], {nullable:true})
    notIn?: Array<keyof typeof ConfigurationDescriptionKind>;

    @Field(() => NestedEnumConfigurationDescriptionKindFilter, {nullable:true})
    not?: NestedEnumConfigurationDescriptionKindFilter;
}
