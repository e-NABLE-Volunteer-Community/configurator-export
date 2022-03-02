import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeviceImageCountOrderByAggregateInput } from './device-image-count-order-by-aggregate.input';
import { DeviceImageAvgOrderByAggregateInput } from './device-image-avg-order-by-aggregate.input';
import { DeviceImageMaxOrderByAggregateInput } from './device-image-max-order-by-aggregate.input';
import { DeviceImageMinOrderByAggregateInput } from './device-image-min-order-by-aggregate.input';
import { DeviceImageSumOrderByAggregateInput } from './device-image-sum-order-by-aggregate.input';

@InputType()
export class DeviceImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => DeviceImageCountOrderByAggregateInput, {nullable:true})
    _count?: DeviceImageCountOrderByAggregateInput;

    @Field(() => DeviceImageAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeviceImageAvgOrderByAggregateInput;

    @Field(() => DeviceImageMaxOrderByAggregateInput, {nullable:true})
    _max?: DeviceImageMaxOrderByAggregateInput;

    @Field(() => DeviceImageMinOrderByAggregateInput, {nullable:true})
    _min?: DeviceImageMinOrderByAggregateInput;

    @Field(() => DeviceImageSumOrderByAggregateInput, {nullable:true})
    _sum?: DeviceImageSumOrderByAggregateInput;
}
