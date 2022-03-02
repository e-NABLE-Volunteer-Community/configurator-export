import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DeviceAuthorAvgAggregate {

    @Field(() => Float, {nullable:true})
    deviceId?: number;

    @Field(() => Float, {nullable:true})
    authorId?: number;
}
