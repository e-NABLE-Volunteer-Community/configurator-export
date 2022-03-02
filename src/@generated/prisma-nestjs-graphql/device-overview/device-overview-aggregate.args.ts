import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewWhereInput } from './device-overview-where.input';
import { DeviceOverviewOrderByWithRelationInput } from './device-overview-order-by-with-relation.input';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceOverviewCountAggregateInput } from './device-overview-count-aggregate.input';
import { DeviceOverviewAvgAggregateInput } from './device-overview-avg-aggregate.input';
import { DeviceOverviewSumAggregateInput } from './device-overview-sum-aggregate.input';
import { DeviceOverviewMinAggregateInput } from './device-overview-min-aggregate.input';
import { DeviceOverviewMaxAggregateInput } from './device-overview-max-aggregate.input';

@ArgsType()
export class DeviceOverviewAggregateArgs {

    @Field(() => DeviceOverviewWhereInput, {nullable:true})
    where?: DeviceOverviewWhereInput;

    @Field(() => [DeviceOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceOverviewOrderByWithRelationInput>;

    @Field(() => DeviceOverviewWhereUniqueInput, {nullable:true})
    cursor?: DeviceOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeviceOverviewCountAggregateInput, {nullable:true})
    _count?: DeviceOverviewCountAggregateInput;

    @Field(() => DeviceOverviewAvgAggregateInput, {nullable:true})
    _avg?: DeviceOverviewAvgAggregateInput;

    @Field(() => DeviceOverviewSumAggregateInput, {nullable:true})
    _sum?: DeviceOverviewSumAggregateInput;

    @Field(() => DeviceOverviewMinAggregateInput, {nullable:true})
    _min?: DeviceOverviewMinAggregateInput;

    @Field(() => DeviceOverviewMaxAggregateInput, {nullable:true})
    _max?: DeviceOverviewMaxAggregateInput;
}
