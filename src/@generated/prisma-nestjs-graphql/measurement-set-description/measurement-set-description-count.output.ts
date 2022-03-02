import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MeasurementSetDescriptionCount {

    @Field(() => Int, {nullable:false})
    overviews!: number;

    @Field(() => Int, {nullable:false})
    measurements!: number;

    @Field(() => Int, {nullable:false})
    devices!: number;
}
