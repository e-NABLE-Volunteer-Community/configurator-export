import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeviceExtraCountOrderByAggregateInput } from './device-extra-count-order-by-aggregate.input';
import { DeviceExtraAvgOrderByAggregateInput } from './device-extra-avg-order-by-aggregate.input';
import { DeviceExtraMaxOrderByAggregateInput } from './device-extra-max-order-by-aggregate.input';
import { DeviceExtraMinOrderByAggregateInput } from './device-extra-min-order-by-aggregate.input';
import { DeviceExtraSumOrderByAggregateInput } from './device-extra-sum-order-by-aggregate.input';

@InputType()
export class DeviceExtraOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    exportLocation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => DeviceExtraCountOrderByAggregateInput, {nullable:true})
    _count?: DeviceExtraCountOrderByAggregateInput;

    @Field(() => DeviceExtraAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeviceExtraAvgOrderByAggregateInput;

    @Field(() => DeviceExtraMaxOrderByAggregateInput, {nullable:true})
    _max?: DeviceExtraMaxOrderByAggregateInput;

    @Field(() => DeviceExtraMinOrderByAggregateInput, {nullable:true})
    _min?: DeviceExtraMinOrderByAggregateInput;

    @Field(() => DeviceExtraSumOrderByAggregateInput, {nullable:true})
    _sum?: DeviceExtraSumOrderByAggregateInput;
}
