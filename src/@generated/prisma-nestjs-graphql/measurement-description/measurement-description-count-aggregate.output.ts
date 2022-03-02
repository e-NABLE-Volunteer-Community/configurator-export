import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MeasurementDescriptionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    measurementSetDescriptionId!: number;

    @Field(() => Int, {nullable:false})
    kind!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
