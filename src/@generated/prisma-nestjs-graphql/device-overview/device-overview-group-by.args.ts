import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceOverviewWhereInput } from './device-overview-where.input';
import { DeviceOverviewOrderByWithAggregationInput } from './device-overview-order-by-with-aggregation.input';
import { DeviceOverviewScalarFieldEnum } from './device-overview-scalar-field.enum';
import { DeviceOverviewScalarWhereWithAggregatesInput } from './device-overview-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DeviceOverviewCountAggregateInput } from './device-overview-count-aggregate.input';
import { DeviceOverviewAvgAggregateInput } from './device-overview-avg-aggregate.input';
import { DeviceOverviewSumAggregateInput } from './device-overview-sum-aggregate.input';
import { DeviceOverviewMinAggregateInput } from './device-overview-min-aggregate.input';
import { DeviceOverviewMaxAggregateInput } from './device-overview-max-aggregate.input';

@ArgsType()
export class DeviceOverviewGroupByArgs {

    @Field(() => DeviceOverviewWhereInput, {nullable:true})
    where?: DeviceOverviewWhereInput;

    @Field(() => [DeviceOverviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DeviceOverviewOrderByWithAggregationInput>;

    @Field(() => [DeviceOverviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DeviceOverviewScalarFieldEnum>;

    @Field(() => DeviceOverviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: DeviceOverviewScalarWhereWithAggregatesInput;

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
