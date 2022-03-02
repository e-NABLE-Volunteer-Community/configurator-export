import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraWhereInput } from './device-extra-where.input';
import { DeviceExtraOrderByWithAggregationInput } from './device-extra-order-by-with-aggregation.input';
import { DeviceExtraScalarFieldEnum } from './device-extra-scalar-field.enum';
import { DeviceExtraScalarWhereWithAggregatesInput } from './device-extra-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DeviceExtraCountAggregateInput } from './device-extra-count-aggregate.input';
import { DeviceExtraAvgAggregateInput } from './device-extra-avg-aggregate.input';
import { DeviceExtraSumAggregateInput } from './device-extra-sum-aggregate.input';
import { DeviceExtraMinAggregateInput } from './device-extra-min-aggregate.input';
import { DeviceExtraMaxAggregateInput } from './device-extra-max-aggregate.input';

@ArgsType()
export class DeviceExtraGroupByArgs {

    @Field(() => DeviceExtraWhereInput, {nullable:true})
    where?: DeviceExtraWhereInput;

    @Field(() => [DeviceExtraOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DeviceExtraOrderByWithAggregationInput>;

    @Field(() => [DeviceExtraScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DeviceExtraScalarFieldEnum>;

    @Field(() => DeviceExtraScalarWhereWithAggregatesInput, {nullable:true})
    having?: DeviceExtraScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeviceExtraCountAggregateInput, {nullable:true})
    _count?: DeviceExtraCountAggregateInput;

    @Field(() => DeviceExtraAvgAggregateInput, {nullable:true})
    _avg?: DeviceExtraAvgAggregateInput;

    @Field(() => DeviceExtraSumAggregateInput, {nullable:true})
    _sum?: DeviceExtraSumAggregateInput;

    @Field(() => DeviceExtraMinAggregateInput, {nullable:true})
    _min?: DeviceExtraMinAggregateInput;

    @Field(() => DeviceExtraMaxAggregateInput, {nullable:true})
    _max?: DeviceExtraMaxAggregateInput;
}
