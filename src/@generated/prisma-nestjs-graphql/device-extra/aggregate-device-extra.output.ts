import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeviceExtraCountAggregate } from './device-extra-count-aggregate.output';
import { DeviceExtraAvgAggregate } from './device-extra-avg-aggregate.output';
import { DeviceExtraSumAggregate } from './device-extra-sum-aggregate.output';
import { DeviceExtraMinAggregate } from './device-extra-min-aggregate.output';
import { DeviceExtraMaxAggregate } from './device-extra-max-aggregate.output';

@ObjectType()
export class AggregateDeviceExtra {

    @Field(() => DeviceExtraCountAggregate, {nullable:true})
    _count?: DeviceExtraCountAggregate;

    @Field(() => DeviceExtraAvgAggregate, {nullable:true})
    _avg?: DeviceExtraAvgAggregate;

    @Field(() => DeviceExtraSumAggregate, {nullable:true})
    _sum?: DeviceExtraSumAggregate;

    @Field(() => DeviceExtraMinAggregate, {nullable:true})
    _min?: DeviceExtraMinAggregate;

    @Field(() => DeviceExtraMaxAggregate, {nullable:true})
    _max?: DeviceExtraMaxAggregate;
}
