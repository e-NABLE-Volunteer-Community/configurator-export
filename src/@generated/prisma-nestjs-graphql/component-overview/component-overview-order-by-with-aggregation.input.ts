import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComponentOverviewCountOrderByAggregateInput } from './component-overview-count-order-by-aggregate.input';
import { ComponentOverviewAvgOrderByAggregateInput } from './component-overview-avg-order-by-aggregate.input';
import { ComponentOverviewMaxOrderByAggregateInput } from './component-overview-max-order-by-aggregate.input';
import { ComponentOverviewMinOrderByAggregateInput } from './component-overview-min-order-by-aggregate.input';
import { ComponentOverviewSumOrderByAggregateInput } from './component-overview-sum-order-by-aggregate.input';

@InputType()
export class ComponentOverviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    componentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => ComponentOverviewCountOrderByAggregateInput, {nullable:true})
    _count?: ComponentOverviewCountOrderByAggregateInput;

    @Field(() => ComponentOverviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: ComponentOverviewAvgOrderByAggregateInput;

    @Field(() => ComponentOverviewMaxOrderByAggregateInput, {nullable:true})
    _max?: ComponentOverviewMaxOrderByAggregateInput;

    @Field(() => ComponentOverviewMinOrderByAggregateInput, {nullable:true})
    _min?: ComponentOverviewMinOrderByAggregateInput;

    @Field(() => ComponentOverviewSumOrderByAggregateInput, {nullable:true})
    _sum?: ComponentOverviewSumOrderByAggregateInput;
}
