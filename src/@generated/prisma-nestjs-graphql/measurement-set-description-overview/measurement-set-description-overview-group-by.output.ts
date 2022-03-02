import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCountAggregate } from './measurement-set-description-overview-count-aggregate.output';
import { MeasurementSetDescriptionOverviewAvgAggregate } from './measurement-set-description-overview-avg-aggregate.output';
import { MeasurementSetDescriptionOverviewSumAggregate } from './measurement-set-description-overview-sum-aggregate.output';
import { MeasurementSetDescriptionOverviewMinAggregate } from './measurement-set-description-overview-min-aggregate.output';
import { MeasurementSetDescriptionOverviewMaxAggregate } from './measurement-set-description-overview-max-aggregate.output';

@ObjectType()
export class MeasurementSetDescriptionOverviewGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    measurementSetDescriptionId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

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
