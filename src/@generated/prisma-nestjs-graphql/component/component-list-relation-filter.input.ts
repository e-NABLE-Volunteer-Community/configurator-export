import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentWhereInput } from './component-where.input';

@InputType()
export class ComponentListRelationFilter {

    @Field(() => ComponentWhereInput, {nullable:true})
    every?: ComponentWhereInput;

    @Field(() => ComponentWhereInput, {nullable:true})
    some?: ComponentWhereInput;

    @Field(() => ComponentWhereInput, {nullable:true})
    none?: ComponentWhereInput;
}
