import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComponentOverviewCountAggregate } from './component-overview-count-aggregate.output';
import { ComponentOverviewAvgAggregate } from './component-overview-avg-aggregate.output';
import { ComponentOverviewSumAggregate } from './component-overview-sum-aggregate.output';
import { ComponentOverviewMinAggregate } from './component-overview-min-aggregate.output';
import { ComponentOverviewMaxAggregate } from './component-overview-max-aggregate.output';

@ObjectType()
export class ComponentOverviewGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    componentId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    locale!: string;

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
