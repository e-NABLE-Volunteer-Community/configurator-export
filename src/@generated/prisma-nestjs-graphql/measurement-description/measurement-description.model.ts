import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';
import { MeasurementSetDescription } from '../measurement-set-description/measurement-set-description.model';
import { MeasurementDescriptionOverview } from '../measurement-description-overview/measurement-description-overview.model';
import { MeasurementDescriptionCount } from './measurement-description-count.output';

@ObjectType()
export class MeasurementDescription {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    measurementSetDescriptionId!: number;

    @Field(() => MeasurementDescriptionKind, {nullable:false})
    kind!: keyof typeof MeasurementDescriptionKind;

    @Field(() => MeasurementSetDescription, {nullable:false})
    measurementSetDescription?: MeasurementSetDescription;

    @Field(() => [MeasurementDescriptionOverview], {nullable:true})
    overviews?: Array<MeasurementDescriptionOverview>;

    @Field(() => MeasurementDescriptionCount, {nullable:false})
    _count?: MeasurementDescriptionCount;
}
