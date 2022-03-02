import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeviceAuthorMinAggregate {

    @Field(() => Int, {nullable:true})
    deviceId?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;
}
