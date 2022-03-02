import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCountAggregate } from './measurement-set-description-count-aggregate.output';
import { MeasurementSetDescriptionAvgAggregate } from './measurement-set-description-avg-aggregate.output';
import { MeasurementSetDescriptionSumAggregate } from './measurement-set-description-sum-aggregate.output';
import { MeasurementSetDescriptionMinAggregate } from './measurement-set-description-min-aggregate.output';
import { MeasurementSetDescriptionMaxAggregate } from './measurement-set-description-max-aggregate.output';

@ObjectType()
export class AggregateMeasurementSetDescription {

    @Field(() => MeasurementSetDescriptionCountAggregate, {nullable:true})
    _count?: MeasurementSetDescriptionCountAggregate;

    @Field(() => MeasurementSetDescriptionAvgAggregate, {nullable:true})
    _avg?: MeasurementSetDescriptionAvgAggregate;

    @Field(() => MeasurementSetDescriptionSumAggregate, {nullable:true})
    _sum?: MeasurementSetDescriptionSumAggregate;

    @Field(() => MeasurementSetDescriptionMinAggregate, {nullable:true})
    _min?: MeasurementSetDescriptionMinAggregate;

    @Field(() => MeasurementSetDescriptionMaxAggregate, {nullable:true})
    _max?: MeasurementSetDescriptionMaxAggregate;
}
