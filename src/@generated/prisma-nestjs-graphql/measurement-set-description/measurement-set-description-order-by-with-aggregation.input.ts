import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MeasurementSetDescriptionCountOrderByAggregateInput } from './measurement-set-description-count-order-by-aggregate.input';
import { MeasurementSetDescriptionAvgOrderByAggregateInput } from './measurement-set-description-avg-order-by-aggregate.input';
import { MeasurementSetDescriptionMaxOrderByAggregateInput } from './measurement-set-description-max-order-by-aggregate.input';
import { MeasurementSetDescriptionMinOrderByAggregateInput } from './measurement-set-description-min-order-by-aggregate.input';
import { MeasurementSetDescriptionSumOrderByAggregateInput } from './measurement-set-description-sum-order-by-aggregate.input';

@InputType()
export class MeasurementSetDescriptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => MeasurementSetDescriptionCountOrderByAggregateInput, {nullable:true})
    _count?: MeasurementSetDescriptionCountOrderByAggregateInput;

    @Field(() => MeasurementSetDescriptionAvgOrderByAggregateInput, {nullable:true})
    _avg?: MeasurementSetDescriptionAvgOrderByAggregateInput;

    @Field(() => MeasurementSetDescriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: MeasurementSetDescriptionMaxOrderByAggregateInput;

    @Field(() => MeasurementSetDescriptionMinOrderByAggregateInput, {nullable:true})
    _min?: MeasurementSetDescriptionMinOrderByAggregateInput;

    @Field(() => MeasurementSetDescriptionSumOrderByAggregateInput, {nullable:true})
    _sum?: MeasurementSetDescriptionSumOrderByAggregateInput;
}
