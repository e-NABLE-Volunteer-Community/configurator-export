import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeviceImageMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    deviceId?: number;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    locale?: string;
}
