import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';

@ObjectType()
export class MeasurementDescriptionMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    measurementSetDescriptionId?: number;

    @Field(() => MeasurementDescriptionKind, {nullable:true})
    kind?: keyof typeof MeasurementDescriptionKind;
}
