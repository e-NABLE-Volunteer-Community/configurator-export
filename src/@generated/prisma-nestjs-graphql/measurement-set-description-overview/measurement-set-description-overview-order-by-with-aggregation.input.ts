import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MeasurementSetDescriptionOverviewCountOrderByAggregateInput } from './measurement-set-description-overview-count-order-by-aggregate.input';
import { MeasurementSetDescriptionOverviewAvgOrderByAggregateInput } from './measurement-set-description-overview-avg-order-by-aggregate.input';
import { MeasurementSetDescriptionOverviewMaxOrderByAggregateInput } from './measurement-set-description-overview-max-order-by-aggregate.input';
import { MeasurementSetDescriptionOverviewMinOrderByAggregateInput } from './measurement-set-description-overview-min-order-by-aggregate.input';
import { MeasurementSetDescriptionOverviewSumOrderByAggregateInput } from './measurement-set-description-overview-sum-order-by-aggregate.input';

@InputType()
export class MeasurementSetDescriptionOverviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => MeasurementSetDescriptionOverviewCountOrderByAggregateInput, {nullable:true})
    _count?: MeasurementSetDescriptionOverviewCountOrderByAggregateInput;

    @Field(() => MeasurementSetDescriptionOverviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: MeasurementSetDescriptionOverviewAvgOrderByAggregateInput;

    @Field(() => MeasurementSetDescriptionOverviewMaxOrderByAggregateInput, {nullable:true})
    _max?: MeasurementSetDescriptionOverviewMaxOrderByAggregateInput;

    @Field(() => MeasurementSetDescriptionOverviewMinOrderByAggregateInput, {nullable:true})
    _min?: MeasurementSetDescriptionOverviewMinOrderByAggregateInput;

    @Field(() => MeasurementSetDescriptionOverviewSumOrderByAggregateInput, {nullable:true})
    _sum?: MeasurementSetDescriptionOverviewSumOrderByAggregateInput;
}
