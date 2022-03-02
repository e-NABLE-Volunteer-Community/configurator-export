import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceImageWhereInput } from './device-image-where.input';
import { DeviceImageOrderByWithRelationInput } from './device-image-order-by-with-relation.input';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceImageCountAggregateInput } from './device-image-count-aggregate.input';
import { DeviceImageAvgAggregateInput } from './device-image-avg-aggregate.input';
import { DeviceImageSumAggregateInput } from './device-image-sum-aggregate.input';
import { DeviceImageMinAggregateInput } from './device-image-min-aggregate.input';
import { DeviceImageMaxAggregateInput } from './device-image-max-aggregate.input';

@ArgsType()
export class DeviceImageAggregateArgs {

    @Field(() => DeviceImageWhereInput, {nullable:true})
    where?: DeviceImageWhereInput;

    @Field(() => [DeviceImageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceImageOrderByWithRelationInput>;

    @Field(() => DeviceImageWhereUniqueInput, {nullable:true})
    cursor?: DeviceImageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeviceImageCountAggregateInput, {nullable:true})
    _count?: DeviceImageCountAggregateInput;

    @Field(() => DeviceImageAvgAggregateInput, {nullable:true})
    _avg?: DeviceImageAvgAggregateInput;

    @Field(() => DeviceImageSumAggregateInput, {nullable:true})
    _sum?: DeviceImageSumAggregateInput;

    @Field(() => DeviceImageMinAggregateInput, {nullable:true})
    _min?: DeviceImageMinAggregateInput;

    @Field(() => DeviceImageMaxAggregateInput, {nullable:true})
    _max?: DeviceImageMaxAggregateInput;
}
