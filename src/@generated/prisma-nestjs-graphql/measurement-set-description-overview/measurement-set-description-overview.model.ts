import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementSetDescription } from '../measurement-set-description/measurement-set-description.model';

@ObjectType()
export class MeasurementSetDescriptionOverview {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    measurementSetDescriptionId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => MeasurementSetDescription, {nullable:false})
    measurementSetDescription?: MeasurementSetDescription;
}
