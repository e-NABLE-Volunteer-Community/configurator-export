import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class DeviceAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    measurementSetDescriptionId?: number;

    @Field(() => Float, {nullable:true})
    optionSetDescriptionId?: number;
}
