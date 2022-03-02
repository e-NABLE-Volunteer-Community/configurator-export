import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceOverviewCountAggregate } from './device-overview-count-aggregate.output';
import { DeviceOverviewAvgAggregate } from './device-overview-avg-aggregate.output';
import { DeviceOverviewSumAggregate } from './device-overview-sum-aggregate.output';
import { DeviceOverviewMinAggregate } from './device-overview-min-aggregate.output';
import { DeviceOverviewMaxAggregate } from './device-overview-max-aggregate.output';

@ObjectType()
export class DeviceOverviewGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => DeviceOverviewCountAggregate, {nullable:true})
    _count?: DeviceOverviewCountAggregate;

    @Field(() => DeviceOverviewAvgAggregate, {nullable:true})
    _avg?: DeviceOverviewAvgAggregate;

    @Field(() => DeviceOverviewSumAggregate, {nullable:true})
    _sum?: DeviceOverviewSumAggregate;

    @Field(() => DeviceOverviewMinAggregate, {nullable:true})
    _min?: DeviceOverviewMinAggregate;

    @Field(() => DeviceOverviewMaxAggregate, {nullable:true})
    _max?: DeviceOverviewMaxAggregate;
}
