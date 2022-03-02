import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereInput } from './measurement-description-overview-where.input';
import { MeasurementDescriptionOverviewOrderByWithRelationInput } from './measurement-description-overview-order-by-with-relation.input';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewCountAggregateInput } from './measurement-description-overview-count-aggregate.input';
import { MeasurementDescriptionOverviewAvgAggregateInput } from './measurement-description-overview-avg-aggregate.input';
import { MeasurementDescriptionOverviewSumAggregateInput } from './measurement-description-overview-sum-aggregate.input';
import { MeasurementDescriptionOverviewMinAggregateInput } from './measurement-description-overview-min-aggregate.input';
import { MeasurementDescriptionOverviewMaxAggregateInput } from './measurement-description-overview-max-aggregate.input';

@ArgsType()
export class MeasurementDescriptionOverviewAggregateArgs {

    @Field(() => MeasurementDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementDescriptionOverviewWhereInput;

    @Field(() => [MeasurementDescriptionOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MeasurementDescriptionOverviewOrderByWithRelationInput>;

    @Field(() => MeasurementDescriptionOverviewWhereUniqueInput, {nullable:true})
    cursor?: MeasurementDescriptionOverviewWhereUniqueInput;

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
