import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MeasurementDescriptionCountOrderByAggregateInput } from './measurement-description-count-order-by-aggregate.input';
import { MeasurementDescriptionAvgOrderByAggregateInput } from './measurement-description-avg-order-by-aggregate.input';
import { MeasurementDescriptionMaxOrderByAggregateInput } from './measurement-description-max-order-by-aggregate.input';
import { MeasurementDescriptionMinOrderByAggregateInput } from './measurement-description-min-order-by-aggregate.input';
import { MeasurementDescriptionSumOrderByAggregateInput } from './measurement-description-sum-order-by-aggregate.input';

@InputType()
export class MeasurementDescriptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;

    @Field(() => MeasurementDescriptionCountOrderByAggregateInput, {nullable:true})
    _count?: MeasurementDescriptionCountOrderByAggregateInput;

    @Field(() => MeasurementDescriptionAvgOrderByAggregateInput, {nullable:true})
    _avg?: MeasurementDescriptionAvgOrderByAggregateInput;

    @Field(() => MeasurementDescriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: MeasurementDescriptionMaxOrderByAggregateInput;

    @Field(() => MeasurementDescriptionMinOrderByAggregateInput, {nullable:true})
    _min?: MeasurementDescriptionMinOrderByAggregateInput;

    @Field(() => MeasurementDescriptionSumOrderByAggregateInput, {nullable:true})
    _sum?: MeasurementDescriptionSumOrderByAggregateInput;
}
