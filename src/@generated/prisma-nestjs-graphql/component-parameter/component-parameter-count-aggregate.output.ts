import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComponentParameterCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    componentId!: number;

    @Field(() => Int, {nullable:false})
    kind!: number;

    @Field(() => Int, {nullable:false})
    cadName!: number;

    @Field(() => Int, {nullable:false})
    humanName!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
