import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from './configuration-description-kind.enum';
import { NestedEnumConfigurationDescriptionKindWithAggregatesFilter } from './nested-enum-configuration-description-kind-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumConfigurationDescriptionKindFilter } from './nested-enum-configuration-description-kind-filter.input';

@InputType()
export class EnumConfigurationDescriptionKindWithAggregatesFilter {

    @Field(() => ConfigurationDescriptionKind, {nullable:true})
    equals?: keyof typeof ConfigurationDescriptionKind;

    @Field(() => [ConfigurationDescriptionKind], {nullable:true})
    in?: Array<keyof typeof ConfigurationDescriptionKind>;

    @Field(() => [ConfigurationDescriptionKind], {nullable:true})
    notIn?: Array<keyof typeof ConfigurationDescriptionKind>;

    @Field(() => NestedEnumConfigurationDescriptionKindWithAggregatesFilter, {nullable:true})
    not?: NestedEnumConfigurationDescriptionKindWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumConfigurationDescriptionKindFilter, {nullable:true})
    _min?: NestedEnumConfigurationDescriptionKindFilter;

    @Field(() => NestedEnumConfigurationDescriptionKindFilter, {nullable:true})
    _max?: NestedEnumConfigurationDescriptionKindFilter;
}
