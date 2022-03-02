import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereInput } from './configuration-set-description-where.input';
import { ConfigurationSetDescriptionOrderByWithRelationInput } from './configuration-set-description-order-by-with-relation.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCountAggregateInput } from './configuration-set-description-count-aggregate.input';
import { ConfigurationSetDescriptionAvgAggregateInput } from './configuration-set-description-avg-aggregate.input';
import { ConfigurationSetDescriptionSumAggregateInput } from './configuration-set-description-sum-aggregate.input';
import { ConfigurationSetDescriptionMinAggregateInput } from './configuration-set-description-min-aggregate.input';
import { ConfigurationSetDescriptionMaxAggregateInput } from './configuration-set-description-max-aggregate.input';

@ArgsType()
export class ConfigurationSetDescriptionAggregateArgs {

    @Field(() => ConfigurationSetDescriptionWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionWhereInput;

    @Field(() => [ConfigurationSetDescriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationSetDescriptionOrderByWithRelationInput>;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    cursor?: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConfigurationSetDescriptionCountAggregateInput, {nullable:true})
    _count?: ConfigurationSetDescriptionCountAggregateInput;

    @Field(() => ConfigurationSetDescriptionAvgAggregateInput, {nullable:true})
    _avg?: ConfigurationSetDescriptionAvgAggregateInput;

    @Field(() => ConfigurationSetDescriptionSumAggregateInput, {nullable:true})
    _sum?: ConfigurationSetDescriptionSumAggregateInput;

    @Field(() => ConfigurationSetDescriptionMinAggregateInput, {nullable:true})
    _min?: ConfigurationSetDescriptionMinAggregateInput;

    @Field(() => ConfigurationSetDescriptionMaxAggregateInput, {nullable:true})
    _max?: ConfigurationSetDescriptionMaxAggregateInput;
}
