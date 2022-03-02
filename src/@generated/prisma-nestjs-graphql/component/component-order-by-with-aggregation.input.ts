import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComponentCountOrderByAggregateInput } from './component-count-order-by-aggregate.input';
import { ComponentAvgOrderByAggregateInput } from './component-avg-order-by-aggregate.input';
import { ComponentMaxOrderByAggregateInput } from './component-max-order-by-aggregate.input';
import { ComponentMinOrderByAggregateInput } from './component-min-order-by-aggregate.input';
import { ComponentSumOrderByAggregateInput } from './component-sum-order-by-aggregate.input';

@InputType()
export class ComponentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    exportLocation?: keyof typeof SortOrder;

    @Field(() => ComponentCountOrderByAggregateInput, {nullable:true})
    _count?: ComponentCountOrderByAggregateInput;

    @Field(() => ComponentAvgOrderByAggregateInput, {nullable:true})
    _avg?: ComponentAvgOrderByAggregateInput;

    @Field(() => ComponentMaxOrderByAggregateInput, {nullable:true})
    _max?: ComponentMaxOrderByAggregateInput;

    @Field(() => ComponentMinOrderByAggregateInput, {nullable:true})
    _min?: ComponentMinOrderByAggregateInput;

    @Field(() => ComponentSumOrderByAggregateInput, {nullable:true})
    _sum?: ComponentSumOrderByAggregateInput;
}
