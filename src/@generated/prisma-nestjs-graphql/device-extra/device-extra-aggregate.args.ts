import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceExtraWhereInput } from './device-extra-where.input';
import { DeviceExtraOrderByWithRelationInput } from './device-extra-order-by-with-relation.input';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceExtraCountAggregateInput } from './device-extra-count-aggregate.input';
import { DeviceExtraAvgAggregateInput } from './device-extra-avg-aggregate.input';
import { DeviceExtraSumAggregateInput } from './device-extra-sum-aggregate.input';
import { DeviceExtraMinAggregateInput } from './device-extra-min-aggregate.input';
import { DeviceExtraMaxAggregateInput } from './device-extra-max-aggregate.input';

@ArgsType()
export class DeviceExtraAggregateArgs {

    @Field(() => DeviceExtraWhereInput, {nullable:true})
    where?: DeviceExtraWhereInput;

    @Field(() => [DeviceExtraOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceExtraOrderByWithRelationInput>;

    @Field(() => DeviceExtraWhereUniqueInput, {nullable:true})
    cursor?: DeviceExtraWhereUniqueInput;

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
