import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeviceAuthorCountAggregate } from './device-author-count-aggregate.output';
import { DeviceAuthorAvgAggregate } from './device-author-avg-aggregate.output';
import { DeviceAuthorSumAggregate } from './device-author-sum-aggregate.output';
import { DeviceAuthorMinAggregate } from './device-author-min-aggregate.output';
import { DeviceAuthorMaxAggregate } from './device-author-max-aggregate.output';

@ObjectType()
export class AggregateDeviceAuthor {

    @Field(() => DeviceAuthorCountAggregate, {nullable:true})
    _count?: DeviceAuthorCountAggregate;

    @Field(() => DeviceAuthorAvgAggregate, {nullable:true})
    _avg?: DeviceAuthorAvgAggregate;

    @Field(() => DeviceAuthorSumAggregate, {nullable:true})
    _sum?: DeviceAuthorSumAggregate;

    @Field(() => DeviceAuthorMinAggregate, {nullable:true})
    _min?: DeviceAuthorMinAggregate;

    @Field(() => DeviceAuthorMaxAggregate, {nullable:true})
    _max?: DeviceAuthorMaxAggregate;
}
