import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewWhereInput } from './component-overview-where.input';
import { ComponentOverviewOrderByWithAggregationInput } from './component-overview-order-by-with-aggregation.input';
import { ComponentOverviewScalarFieldEnum } from './component-overview-scalar-field.enum';
import { ComponentOverviewScalarWhereWithAggregatesInput } from './component-overview-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ComponentOverviewCountAggregateInput } from './component-overview-count-aggregate.input';
import { ComponentOverviewAvgAggregateInput } from './component-overview-avg-aggregate.input';
import { ComponentOverviewSumAggregateInput } from './component-overview-sum-aggregate.input';
import { ComponentOverviewMinAggregateInput } from './component-overview-min-aggregate.input';
import { ComponentOverviewMaxAggregateInput } from './component-overview-max-aggregate.input';

@ArgsType()
export class ComponentOverviewGroupByArgs {

    @Field(() => ComponentOverviewWhereInput, {nullable:true})
    where?: ComponentOverviewWhereInput;

    @Field(() => [ComponentOverviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ComponentOverviewOrderByWithAggregationInput>;

    @Field(() => [ComponentOverviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ComponentOverviewScalarFieldEnum>;

    @Field(() => ComponentOverviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: ComponentOverviewScalarWhereWithAggregatesInput;

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
