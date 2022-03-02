import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewWhereInput } from './component-overview-where.input';
import { ComponentOverviewOrderByWithRelationInput } from './component-overview-order-by-with-relation.input';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComponentOverviewCountAggregateInput } from './component-overview-count-aggregate.input';
import { ComponentOverviewAvgAggregateInput } from './component-overview-avg-aggregate.input';
import { ComponentOverviewSumAggregateInput } from './component-overview-sum-aggregate.input';
import { ComponentOverviewMinAggregateInput } from './component-overview-min-aggregate.input';
import { ComponentOverviewMaxAggregateInput } from './component-overview-max-aggregate.input';

@ArgsType()
export class ComponentOverviewAggregateArgs {

    @Field(() => ComponentOverviewWhereInput, {nullable:true})
    where?: ComponentOverviewWhereInput;

    @Field(() => [ComponentOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComponentOverviewOrderByWithRelationInput>;

    @Field(() => ComponentOverviewWhereUniqueInput, {nullable:true})
    cursor?: ComponentOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ComponentOverviewCountAggregateInput, {nullable:true})
    _count?: ComponentOverviewCountAggregateInput;

    @Field(() => ComponentOverviewAvgAggregateInput, {nullable:true})
    _avg?: ComponentOverviewAvgAggregateInput;

    @Field(() => ComponentOverviewSumAggregateInput, {nullable:true})
    _sum?: ComponentOverviewSumAggregateInput;

    @Field(() => ComponentOverviewMinAggregateInput, {nullable:true})
    _min?: ComponentOverviewMinAggregateInput;

    @Field(() => ComponentOverviewMaxAggregateInput, {nullable:true})
    _max?: ComponentOverviewMaxAggregateInput;
}
