import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeviceCountOrderByAggregateInput } from './device-count-order-by-aggregate.input';
import { DeviceAvgOrderByAggregateInput } from './device-avg-order-by-aggregate.input';
import { DeviceMaxOrderByAggregateInput } from './device-max-order-by-aggregate.input';
import { DeviceMinOrderByAggregateInput } from './device-min-order-by-aggregate.input';
import { DeviceSumOrderByAggregateInput } from './device-sum-order-by-aggregate.input';

@InputType()
export class DeviceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    optionSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DeviceCountOrderByAggregateInput, {nullable:true})
    _count?: DeviceCountOrderByAggregateInput;

    @Field(() => DeviceAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeviceAvgOrderByAggregateInput;

    @Field(() => DeviceMaxOrderByAggregateInput, {nullable:true})
    _max?: DeviceMaxOrderByAggregateInput;

    @Field(() => DeviceMinOrderByAggregateInput, {nullable:true})
    _min?: DeviceMinOrderByAggregateInput;

    @Field(() => DeviceSumOrderByAggregateInput, {nullable:true})
    _sum?: DeviceSumOrderByAggregateInput;
}
