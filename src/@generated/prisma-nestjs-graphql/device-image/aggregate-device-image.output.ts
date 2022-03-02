import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeviceImageCountAggregate } from './device-image-count-aggregate.output';
import { DeviceImageAvgAggregate } from './device-image-avg-aggregate.output';
import { DeviceImageSumAggregate } from './device-image-sum-aggregate.output';
import { DeviceImageMinAggregate } from './device-image-min-aggregate.output';
import { DeviceImageMaxAggregate } from './device-image-max-aggregate.output';

@ObjectType()
export class AggregateDeviceImage {

    @Field(() => DeviceImageCountAggregate, {nullable:true})
    _count?: DeviceImageCountAggregate;

    @Field(() => DeviceImageAvgAggregate, {nullable:true})
    _avg?: DeviceImageAvgAggregate;

    @Field(() => DeviceImageSumAggregate, {nullable:true})
    _sum?: DeviceImageSumAggregate;

    @Field(() => DeviceImageMinAggregate, {nullable:true})
    _min?: DeviceImageMinAggregate;

    @Field(() => DeviceImageMaxAggregate, {nullable:true})
    _max?: DeviceImageMaxAggregate;
}
