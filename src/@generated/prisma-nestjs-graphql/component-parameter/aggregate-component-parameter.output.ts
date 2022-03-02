import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ComponentParameterCountAggregate } from './component-parameter-count-aggregate.output';
import { ComponentParameterAvgAggregate } from './component-parameter-avg-aggregate.output';
import { ComponentParameterSumAggregate } from './component-parameter-sum-aggregate.output';
import { ComponentParameterMinAggregate } from './component-parameter-min-aggregate.output';
import { ComponentParameterMaxAggregate } from './component-parameter-max-aggregate.output';

@ObjectType()
export class AggregateComponentParameter {

    @Field(() => ComponentParameterCountAggregate, {nullable:true})
    _count?: ComponentParameterCountAggregate;

    @Field(() => ComponentParameterAvgAggregate, {nullable:true})
    _avg?: ComponentParameterAvgAggregate;

    @Field(() => ComponentParameterSumAggregate, {nullable:true})
    _sum?: ComponentParameterSumAggregate;

    @Field(() => ComponentParameterMinAggregate, {nullable:true})
    _min?: ComponentParameterMinAggregate;

    @Field(() => ComponentParameterMaxAggregate, {nullable:true})
    _max?: ComponentParameterMaxAggregate;
}
