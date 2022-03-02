import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeviceAuthorCountOrderByAggregateInput } from './device-author-count-order-by-aggregate.input';
import { DeviceAuthorAvgOrderByAggregateInput } from './device-author-avg-order-by-aggregate.input';
import { DeviceAuthorMaxOrderByAggregateInput } from './device-author-max-order-by-aggregate.input';
import { DeviceAuthorMinOrderByAggregateInput } from './device-author-min-order-by-aggregate.input';
import { DeviceAuthorSumOrderByAggregateInput } from './device-author-sum-order-by-aggregate.input';

@InputType()
export class DeviceAuthorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    deviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => DeviceAuthorCountOrderByAggregateInput, {nullable:true})
    _count?: DeviceAuthorCountOrderByAggregateInput;

    @Field(() => DeviceAuthorAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeviceAuthorAvgOrderByAggregateInput;

    @Field(() => DeviceAuthorMaxOrderByAggregateInput, {nullable:true})
    _max?: DeviceAuthorMaxOrderByAggregateInput;

    @Field(() => DeviceAuthorMinOrderByAggregateInput, {nullable:true})
    _min?: DeviceAuthorMinOrderByAggregateInput;

    @Field(() => DeviceAuthorSumOrderByAggregateInput, {nullable:true})
    _sum?: DeviceAuthorSumOrderByAggregateInput;
}
