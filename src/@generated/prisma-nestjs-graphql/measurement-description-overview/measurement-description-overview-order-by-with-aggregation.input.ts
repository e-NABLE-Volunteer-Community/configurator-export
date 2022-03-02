import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MeasurementDescriptionOverviewCountOrderByAggregateInput } from './measurement-description-overview-count-order-by-aggregate.input';
import { MeasurementDescriptionOverviewAvgOrderByAggregateInput } from './measurement-description-overview-avg-order-by-aggregate.input';
import { MeasurementDescriptionOverviewMaxOrderByAggregateInput } from './measurement-description-overview-max-order-by-aggregate.input';
import { MeasurementDescriptionOverviewMinOrderByAggregateInput } from './measurement-description-overview-min-order-by-aggregate.input';
import { MeasurementDescriptionOverviewSumOrderByAggregateInput } from './measurement-description-overview-sum-order-by-aggregate.input';

@InputType()
export class MeasurementDescriptionOverviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => MeasurementDescriptionOverviewCountOrderByAggregateInput, {nullable:true})
    _count?: MeasurementDescriptionOverviewCountOrderByAggregateInput;

    @Field(() => MeasurementDescriptionOverviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: MeasurementDescriptionOverviewAvgOrderByAggregateInput;

    @Field(() => MeasurementDescriptionOverviewMaxOrderByAggregateInput, {nullable:true})
    _max?: MeasurementDescriptionOverviewMaxOrderByAggregateInput;

    @Field(() => MeasurementDescriptionOverviewMinOrderByAggregateInput, {nullable:true})
    _min?: MeasurementDescriptionOverviewMinOrderByAggregateInput;

    @Field(() => MeasurementDescriptionOverviewSumOrderByAggregateInput, {nullable:true})
    _sum?: MeasurementDescriptionOverviewSumOrderByAggregateInput;
}
