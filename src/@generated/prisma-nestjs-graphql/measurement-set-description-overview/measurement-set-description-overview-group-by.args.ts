import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewWhereInput } from './measurement-set-description-overview-where.input';
import { MeasurementSetDescriptionOverviewOrderByWithAggregationInput } from './measurement-set-description-overview-order-by-with-aggregation.input';
import { MeasurementSetDescriptionOverviewScalarFieldEnum } from './measurement-set-description-overview-scalar-field.enum';
import { MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput } from './measurement-set-description-overview-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCountAggregateInput } from './measurement-set-description-overview-count-aggregate.input';
import { MeasurementSetDescriptionOverviewAvgAggregateInput } from './measurement-set-description-overview-avg-aggregate.input';
import { MeasurementSetDescriptionOverviewSumAggregateInput } from './measurement-set-description-overview-sum-aggregate.input';
import { MeasurementSetDescriptionOverviewMinAggregateInput } from './measurement-set-description-overview-min-aggregate.input';
import { MeasurementSetDescriptionOverviewMaxAggregateInput } from './measurement-set-description-overview-max-aggregate.input';

@ArgsType()
export class MeasurementSetDescriptionOverviewGroupByArgs {

    @Field(() => MeasurementSetDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementSetDescriptionOverviewWhereInput;

    @Field(() => [MeasurementSetDescriptionOverviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MeasurementSetDescriptionOverviewOrderByWithAggregationInput>;

    @Field(() => [MeasurementSetDescriptionOverviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MeasurementSetDescriptionOverviewScalarFieldEnum>;

    @Field(() => MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MeasurementSetDescriptionOverviewCountAggregateInput, {nullable:true})
    _count?: MeasurementSetDescriptionOverviewCountAggregateInput;

    @Field(() => MeasurementSetDescriptionOverviewAvgAggregateInput, {nullable:true})
    _avg?: MeasurementSetDescriptionOverviewAvgAggregateInput;

    @Field(() => MeasurementSetDescriptionOverviewSumAggregateInput, {nullable:true})
    _sum?: MeasurementSetDescriptionOverviewSumAggregateInput;

    @Field(() => MeasurementSetDescriptionOverviewMinAggregateInput, {nullable:true})
    _min?: MeasurementSetDescriptionOverviewMinAggregateInput;

    @Field(() => MeasurementSetDescriptionOverviewMaxAggregateInput, {nullable:true})
    _max?: MeasurementSetDescriptionOverviewMaxAggregateInput;
}
