import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ComponentOverviewCountAggregate } from './component-overview-count-aggregate.output';
import { ComponentOverviewAvgAggregate } from './component-overview-avg-aggregate.output';
import { ComponentOverviewSumAggregate } from './component-overview-sum-aggregate.output';
import { ComponentOverviewMinAggregate } from './component-overview-min-aggregate.output';
import { ComponentOverviewMaxAggregate } from './component-overview-max-aggregate.output';

@ObjectType()
export class AggregateComponentOverview {

    @Field(() => ComponentOverviewCountAggregate, {nullable:true})
    _count?: ComponentOverviewCountAggregate;

    @Field(() => ComponentOverviewAvgAggregate, {nullable:true})
    _avg?: ComponentOverviewAvgAggregate;

    @Field(() => ComponentOverviewSumAggregate, {nullable:true})
    _sum?: ComponentOverviewSumAggregate;

    @Field(() => ComponentOverviewMinAggregate, {nullable:true})
    _min?: ComponentOverviewMinAggregate;

    @Field(() => ComponentOverviewMaxAggregate, {nullable:true})
    _max?: ComponentOverviewMaxAggregate;
}
