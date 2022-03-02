import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterWhereInput } from './component-parameter-where.input';

@InputType()
export class ComponentParameterListRelationFilter {

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    every?: ComponentParameterWhereInput;

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    some?: ComponentParameterWhereInput;

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    none?: ComponentParameterWhereInput;
}
