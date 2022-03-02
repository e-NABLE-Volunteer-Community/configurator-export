import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';
import { MeasurementDescriptionCountAggregate } from './measurement-description-count-aggregate.output';
import { MeasurementDescriptionAvgAggregate } from './measurement-description-avg-aggregate.output';
import { MeasurementDescriptionSumAggregate } from './measurement-description-sum-aggregate.output';
import { MeasurementDescriptionMinAggregate } from './measurement-description-min-aggregate.output';
import { MeasurementDescriptionMaxAggregate } from './measurement-description-max-aggregate.output';

@ObjectType()
export class MeasurementDescriptionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    measurementSetDescriptionId!: number;

    @Field(() => MeasurementDescriptionKind, {nullable:false})
    kind!: keyof typeof MeasurementDescriptionKind;

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
