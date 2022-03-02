import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MeasurementDescriptionCount {

    @Field(() => Int, {nullable:false})
    overviews!: number;
}
