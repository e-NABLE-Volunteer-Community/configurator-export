import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeviceCount {

    @Field(() => Int, {nullable:false})
    components!: number;

    @Field(() => Int, {nullable:false})
    deviceAuthors!: number;

    @Field(() => Int, {nullable:false})
    deviceExtras!: number;

    @Field(() => Int, {nullable:false})
    deviceImages!: number;

    @Field(() => Int, {nullable:false})
    deviceOverviews!: number;
}
