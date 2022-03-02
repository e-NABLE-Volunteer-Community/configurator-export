import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceAuthorWhereInput } from './device-author-where.input';
import { DeviceAuthorOrderByWithAggregationInput } from './device-author-order-by-with-aggregation.input';
import { DeviceAuthorScalarFieldEnum } from './device-author-scalar-field.enum';
import { DeviceAuthorScalarWhereWithAggregatesInput } from './device-author-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DeviceAuthorCountAggregateInput } from './device-author-count-aggregate.input';
import { DeviceAuthorAvgAggregateInput } from './device-author-avg-aggregate.input';
import { DeviceAuthorSumAggregateInput } from './device-author-sum-aggregate.input';
import { DeviceAuthorMinAggregateInput } from './device-author-min-aggregate.input';
import { DeviceAuthorMaxAggregateInput } from './device-author-max-aggregate.input';

@ArgsType()
export class DeviceAuthorGroupByArgs {

    @Field(() => DeviceAuthorWhereInput, {nullable:true})
    where?: DeviceAuthorWhereInput;

    @Field(() => [DeviceAuthorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DeviceAuthorOrderByWithAggregationInput>;

    @Field(() => [DeviceAuthorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DeviceAuthorScalarFieldEnum>;

    @Field(() => DeviceAuthorScalarWhereWithAggregatesInput, {nullable:true})
    having?: DeviceAuthorScalarWhereWithAggregatesInput;

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
