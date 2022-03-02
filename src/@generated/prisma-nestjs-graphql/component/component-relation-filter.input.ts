import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentWhereInput } from './component-where.input';

@InputType()
export class ComponentRelationFilter {

    @Field(() => ComponentWhereInput, {nullable:true})
    is?: ComponentWhereInput;

    @Field(() => ComponentWhereInput, {nullable:true})
    isNot?: ComponentWhereInput;
}
