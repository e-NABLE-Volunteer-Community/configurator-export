import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceCountAggregate } from './device-count-aggregate.output';
import { DeviceAvgAggregate } from './device-avg-aggregate.output';
import { DeviceSumAggregate } from './device-sum-aggregate.output';
import { DeviceMinAggregate } from './device-min-aggregate.output';
import { DeviceMaxAggregate } from './device-max-aggregate.output';

@ObjectType()
export class DeviceGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    measurementSetDescriptionId?: number;

    @Field(() => Int, {nullable:true})
    optionSetDescriptionId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DeviceCountAggregate, {nullable:true})
    _count?: DeviceCountAggregate;

    @Field(() => DeviceAvgAggregate, {nullable:true})
    _avg?: DeviceAvgAggregate;

    @Field(() => DeviceSumAggregate, {nullable:true})
    _sum?: DeviceSumAggregate;

    @Field(() => DeviceMinAggregate, {nullable:true})
    _min?: DeviceMinAggregate;

    @Field(() => DeviceMaxAggregate, {nullable:true})
    _max?: DeviceMaxAggregate;
}
