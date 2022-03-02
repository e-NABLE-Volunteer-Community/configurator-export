import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewCountAggregate } from './measurement-description-overview-count-aggregate.output';
import { MeasurementDescriptionOverviewAvgAggregate } from './measurement-description-overview-avg-aggregate.output';
import { MeasurementDescriptionOverviewSumAggregate } from './measurement-description-overview-sum-aggregate.output';
import { MeasurementDescriptionOverviewMinAggregate } from './measurement-description-overview-min-aggregate.output';
import { MeasurementDescriptionOverviewMaxAggregate } from './measurement-description-overview-max-aggregate.output';

@ObjectType()
export class AggregateMeasurementDescriptionOverview {

    @Field(() => MeasurementDescriptionOverviewCountAggregate, {nullable:true})
    _count?: MeasurementDescriptionOverviewCountAggregate;

    @Field(() => MeasurementDescriptionOverviewAvgAggregate, {nullable:true})
    _avg?: MeasurementDescriptionOverviewAvgAggregate;

    @Field(() => MeasurementDescriptionOverviewSumAggregate, {nullable:true})
    _sum?: MeasurementDescriptionOverviewSumAggregate;

    @Field(() => MeasurementDescriptionOverviewMinAggregate, {nullable:true})
    _min?: MeasurementDescriptionOverviewMinAggregate;

    @Field(() => MeasurementDescriptionOverviewMaxAggregate, {nullable:true})
    _max?: MeasurementDescriptionOverviewMaxAggregate;
}
