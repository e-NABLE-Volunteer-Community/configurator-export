import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ComponentCountAggregate } from './component-count-aggregate.output';
import { ComponentAvgAggregate } from './component-avg-aggregate.output';
import { ComponentSumAggregate } from './component-sum-aggregate.output';
import { ComponentMinAggregate } from './component-min-aggregate.output';
import { ComponentMaxAggregate } from './component-max-aggregate.output';

@ObjectType()
export class ComponentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => ComponentCountAggregate, {nullable:true})
    _count?: ComponentCountAggregate;

    @Field(() => ComponentAvgAggregate, {nullable:true})
    _avg?: ComponentAvgAggregate;

    @Field(() => ComponentSumAggregate, {nullable:true})
    _sum?: ComponentSumAggregate;

    @Field(() => ComponentMinAggregate, {nullable:true})
    _min?: ComponentMinAggregate;

    @Field(() => ComponentMaxAggregate, {nullable:true})
    _max?: ComponentMaxAggregate;
}
