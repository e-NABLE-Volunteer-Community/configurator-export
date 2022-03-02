import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereInput } from './configuration-description-where.input';
import { ConfigurationDescriptionOrderByWithRelationInput } from './configuration-description-order-by-with-relation.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionCountAggregateInput } from './configuration-description-count-aggregate.input';
import { ConfigurationDescriptionAvgAggregateInput } from './configuration-description-avg-aggregate.input';
import { ConfigurationDescriptionSumAggregateInput } from './configuration-description-sum-aggregate.input';
import { ConfigurationDescriptionMinAggregateInput } from './configuration-description-min-aggregate.input';
import { ConfigurationDescriptionMaxAggregateInput } from './configuration-description-max-aggregate.input';

@ArgsType()
export class ConfigurationDescriptionAggregateArgs {

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    where?: ConfigurationDescriptionWhereInput;

    @Field(() => [ConfigurationDescriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationDescriptionOrderByWithRelationInput>;

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:true})
    cursor?: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConfigurationDescriptionCountAggregateInput, {nullable:true})
    _count?: ConfigurationDescriptionCountAggregateInput;

    @Field(() => ConfigurationDescriptionAvgAggregateInput, {nullable:true})
    _avg?: ConfigurationDescriptionAvgAggregateInput;

    @Field(() => ConfigurationDescriptionSumAggregateInput, {nullable:true})
    _sum?: ConfigurationDescriptionSumAggregateInput;

    @Field(() => ConfigurationDescriptionMinAggregateInput, {nullable:true})
    _min?: ConfigurationDescriptionMinAggregateInput;

    @Field(() => ConfigurationDescriptionMaxAggregateInput, {nullable:true})
    _max?: ConfigurationDescriptionMaxAggregateInput;
}
