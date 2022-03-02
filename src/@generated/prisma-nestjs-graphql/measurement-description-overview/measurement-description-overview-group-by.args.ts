import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereInput } from './measurement-description-overview-where.input';
import { MeasurementDescriptionOverviewOrderByWithAggregationInput } from './measurement-description-overview-order-by-with-aggregation.input';
import { MeasurementDescriptionOverviewScalarFieldEnum } from './measurement-description-overview-scalar-field.enum';
import { MeasurementDescriptionOverviewScalarWhereWithAggregatesInput } from './measurement-description-overview-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewCountAggregateInput } from './measurement-description-overview-count-aggregate.input';
import { MeasurementDescriptionOverviewAvgAggregateInput } from './measurement-description-overview-avg-aggregate.input';
import { MeasurementDescriptionOverviewSumAggregateInput } from './measurement-description-overview-sum-aggregate.input';
import { MeasurementDescriptionOverviewMinAggregateInput } from './measurement-description-overview-min-aggregate.input';
import { MeasurementDescriptionOverviewMaxAggregateInput } from './measurement-description-overview-max-aggregate.input';

@ArgsType()
export class MeasurementDescriptionOverviewGroupByArgs {

    @Field(() => MeasurementDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementDescriptionOverviewWhereInput;

    @Field(() => [MeasurementDescriptionOverviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MeasurementDescriptionOverviewOrderByWithAggregationInput>;

    @Field(() => [MeasurementDescriptionOverviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MeasurementDescriptionOverviewScalarFieldEnum>;

    @Field(() => MeasurementDescriptionOverviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: MeasurementDescriptionOverviewScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MeasurementDescriptionOverviewCountAggregateInput, {nullable:true})
    _count?: MeasurementDescriptionOverviewCountAggregateInput;

    @Field(() => MeasurementDescriptionOverviewAvgAggregateInput, {nullable:true})
    _avg?: MeasurementDescriptionOverviewAvgAggregateInput;

    @Field(() => MeasurementDescriptionOverviewSumAggregateInput, {nullable:true})
    _sum?: MeasurementDescriptionOverviewSumAggregateInput;

    @Field(() => MeasurementDescriptionOverviewMinAggregateInput, {nullable:true})
    _min?: MeasurementDescriptionOverviewMinAggregateInput;

    @Field(() => MeasurementDescriptionOverviewMaxAggregateInput, {nullable:true})
    _max?: MeasurementDescriptionOverviewMaxAggregateInput;
}
