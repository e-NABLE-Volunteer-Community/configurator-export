import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComponentParameterCountOrderByAggregateInput } from './component-parameter-count-order-by-aggregate.input';
import { ComponentParameterAvgOrderByAggregateInput } from './component-parameter-avg-order-by-aggregate.input';
import { ComponentParameterMaxOrderByAggregateInput } from './component-parameter-max-order-by-aggregate.input';
import { ComponentParameterMinOrderByAggregateInput } from './component-parameter-min-order-by-aggregate.input';
import { ComponentParameterSumOrderByAggregateInput } from './component-parameter-sum-order-by-aggregate.input';

@InputType()
export class ComponentParameterOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    componentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cadName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    humanName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => ComponentParameterCountOrderByAggregateInput, {nullable:true})
    _count?: ComponentParameterCountOrderByAggregateInput;

    @Field(() => ComponentParameterAvgOrderByAggregateInput, {nullable:true})
    _avg?: ComponentParameterAvgOrderByAggregateInput;

    @Field(() => ComponentParameterMaxOrderByAggregateInput, {nullable:true})
    _max?: ComponentParameterMaxOrderByAggregateInput;

    @Field(() => ComponentParameterMinOrderByAggregateInput, {nullable:true})
    _min?: ComponentParameterMinOrderByAggregateInput;

    @Field(() => ComponentParameterSumOrderByAggregateInput, {nullable:true})
    _sum?: ComponentParameterSumOrderByAggregateInput;
}
