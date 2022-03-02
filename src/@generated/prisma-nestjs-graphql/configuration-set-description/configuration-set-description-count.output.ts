import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ConfigurationSetDescriptionCount {

    @Field(() => Int, {nullable:false})
    overviews!: number;

    @Field(() => Int, {nullable:false})
    configurations!: number;

    @Field(() => Int, {nullable:false})
    deviceMeasurements!: number;

    @Field(() => Int, {nullable:false})
    deviceOptions!: number;
}
