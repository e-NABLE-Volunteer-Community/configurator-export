import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeviceAuthorCountAggregate {

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
