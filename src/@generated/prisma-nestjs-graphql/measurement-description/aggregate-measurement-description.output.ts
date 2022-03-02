import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MeasurementDescriptionCountAggregate } from './measurement-description-count-aggregate.output';
import { MeasurementDescriptionAvgAggregate } from './measurement-description-avg-aggregate.output';
import { MeasurementDescriptionSumAggregate } from './measurement-description-sum-aggregate.output';
import { MeasurementDescriptionMinAggregate } from './measurement-description-min-aggregate.output';
import { MeasurementDescriptionMaxAggregate } from './measurement-description-max-aggregate.output';

@ObjectType()
export class AggregateMeasurementDescription {

    @Field(() => MeasurementDescriptionCountAggregate, {nullable:true})
    _count?: MeasurementDescriptionCountAggregate;

    @Field(() => MeasurementDescriptionAvgAggregate, {nullable:true})
    _avg?: MeasurementDescriptionAvgAggregate;

    @Field(() => MeasurementDescriptionSumAggregate, {nullable:true})
    _sum?: MeasurementDescriptionSumAggregate;

    @Field(() => MeasurementDescriptionMinAggregate, {nullable:true})
    _min?: MeasurementDescriptionMinAggregate;

    @Field(() => MeasurementDescriptionMaxAggregate, {nullable:true})
    _max?: MeasurementDescriptionMaxAggregate;
}
