import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorWhereInput } from './device-author-where.input';
import { DeviceAuthorOrderByWithRelationInput } from './device-author-order-by-with-relation.input';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceAuthorCountAggregateInput } from './device-author-count-aggregate.input';
import { DeviceAuthorAvgAggregateInput } from './device-author-avg-aggregate.input';
import { DeviceAuthorSumAggregateInput } from './device-author-sum-aggregate.input';
import { DeviceAuthorMinAggregateInput } from './device-author-min-aggregate.input';
import { DeviceAuthorMaxAggregateInput } from './device-author-max-aggregate.input';

@ArgsType()
export class DeviceAuthorAggregateArgs {

    @Field(() => DeviceAuthorWhereInput, {nullable:true})
    where?: DeviceAuthorWhereInput;

    @Field(() => [DeviceAuthorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceAuthorOrderByWithRelationInput>;

    @Field(() => DeviceAuthorWhereUniqueInput, {nullable:true})
    cursor?: DeviceAuthorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeviceAuthorCountAggregateInput, {nullable:true})
    _count?: DeviceAuthorCountAggregateInput;

    @Field(() => DeviceAuthorAvgAggregateInput, {nullable:true})
    _avg?: DeviceAuthorAvgAggregateInput;

    @Field(() => DeviceAuthorSumAggregateInput, {nullable:true})
    _sum?: DeviceAuthorSumAggregateInput;

    @Field(() => DeviceAuthorMinAggregateInput, {nullable:true})
    _min?: DeviceAuthorMinAggregateInput;

    @Field(() => DeviceAuthorMaxAggregateInput, {nullable:true})
    _max?: DeviceAuthorMaxAggregateInput;
}
