import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCountAggregate } from './measurement-set-description-overview-count-aggregate.output';
import { MeasurementSetDescriptionOverviewAvgAggregate } from './measurement-set-description-overview-avg-aggregate.output';
import { MeasurementSetDescriptionOverviewSumAggregate } from './measurement-set-description-overview-sum-aggregate.output';
import { MeasurementSetDescriptionOverviewMinAggregate } from './measurement-set-description-overview-min-aggregate.output';
import { MeasurementSetDescriptionOverviewMaxAggregate } from './measurement-set-description-overview-max-aggregate.output';

@ObjectType()
export class AggregateMeasurementSetDescriptionOverview {

    @Field(() => MeasurementSetDescriptionOverviewCountAggregate, {nullable:true})
    _count?: MeasurementSetDescriptionOverviewCountAggregate;

    @Field(() => MeasurementSetDescriptionOverviewAvgAggregate, {nullable:true})
    _avg?: MeasurementSetDescriptionOverviewAvgAggregate;

    @Field(() => MeasurementSetDescriptionOverviewSumAggregate, {nullable:true})
    _sum?: MeasurementSetDescriptionOverviewSumAggregate;

    @Field(() => MeasurementSetDescriptionOverviewMinAggregate, {nullable:true})
    _min?: MeasurementSetDescriptionOverviewMinAggregate;

    @Field(() => MeasurementSetDescriptionOverviewMaxAggregate, {nullable:true})
    _max?: MeasurementSetDescriptionOverviewMaxAggregate;
}
