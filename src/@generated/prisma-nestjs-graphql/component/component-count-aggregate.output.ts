import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComponentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => Int, {nullable:false})
    location!: number;

    @Field(() => Int, {nullable:false})
    exportLocation!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
