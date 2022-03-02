import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterKind } from '../component/component-parameter-kind.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumComponentParameterKindFilter } from './nested-enum-component-parameter-kind-filter.input';

@InputType()
export class NestedEnumComponentParameterKindWithAggregatesFilter {

    @Field(() => ComponentParameterKind, {nullable:true})
    equals?: keyof typeof ComponentParameterKind;

    @Field(() => [ComponentParameterKind], {nullable:true})
    in?: Array<keyof typeof ComponentParameterKind>;

    @Field(() => [ComponentParameterKind], {nullable:true})
    notIn?: Array<keyof typeof ComponentParameterKind>;

    @Field(() => NestedEnumComponentParameterKindWithAggregatesFilter, {nullable:true})
    not?: NestedEnumComponentParameterKindWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumComponentParameterKindFilter, {nullable:true})
    _min?: NestedEnumComponentParameterKindFilter;

    @Field(() => NestedEnumComponentParameterKindFilter, {nullable:true})
    _max?: NestedEnumComponentParameterKindFilter;
}
