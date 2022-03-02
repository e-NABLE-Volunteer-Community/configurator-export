import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterKind } from '../component/component-parameter-kind.enum';

@InputType()
export class NestedEnumComponentParameterKindFilter {

    @Field(() => ComponentParameterKind, {nullable:true})
    equals?: keyof typeof ComponentParameterKind;

    @Field(() => [ComponentParameterKind], {nullable:true})
    in?: Array<keyof typeof ComponentParameterKind>;

    @Field(() => [ComponentParameterKind], {nullable:true})
    notIn?: Array<keyof typeof ComponentParameterKind>;

    @Field(() => NestedEnumComponentParameterKindFilter, {nullable:true})
    not?: NestedEnumComponentParameterKindFilter;
}
