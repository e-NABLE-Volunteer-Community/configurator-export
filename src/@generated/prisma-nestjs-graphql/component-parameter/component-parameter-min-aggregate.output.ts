import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComponentParameterKind } from '../component/component-parameter-kind.enum';

@ObjectType()
export class ComponentParameterMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    componentId?: number;

    @Field(() => ComponentParameterKind, {nullable:true})
    kind?: keyof typeof ComponentParameterKind;

    @Field(() => String, {nullable:true})
    cadName?: string;

    @Field(() => String, {nullable:true})
    humanName?: string;

    @Field(() => String, {nullable:true})
    description?: string;
}
