import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterWhereInput } from './component-parameter-where.input';

@InputType()
export class ComponentParameterRelationFilter {

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    is?: ComponentParameterWhereInput;

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    isNot?: ComponentParameterWhereInput;
}
