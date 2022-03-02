import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeviceOverviewCountOrderByAggregateInput } from './device-overview-count-order-by-aggregate.input';
import { DeviceOverviewAvgOrderByAggregateInput } from './device-overview-avg-order-by-aggregate.input';
import { DeviceOverviewMaxOrderByAggregateInput } from './device-overview-max-order-by-aggregate.input';
import { DeviceOverviewMinOrderByAggregateInput } from './device-overview-min-order-by-aggregate.input';
import { DeviceOverviewSumOrderByAggregateInput } from './device-overview-sum-order-by-aggregate.input';

@InputType()
export class DeviceOverviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => DeviceOverviewCountOrderByAggregateInput, {nullable:true})
    _count?: DeviceOverviewCountOrderByAggregateInput;

    @Field(() => DeviceOverviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeviceOverviewAvgOrderByAggregateInput;

    @Field(() => DeviceOverviewMaxOrderByAggregateInput, {nullable:true})
    _max?: DeviceOverviewMaxOrderByAggregateInput;

    @Field(() => DeviceOverviewMinOrderByAggregateInput, {nullable:true})
    _min?: DeviceOverviewMinOrderByAggregateInput;

    @Field(() => DeviceOverviewSumOrderByAggregateInput, {nullable:true})
    _sum?: DeviceOverviewSumOrderByAggregateInput;
}
