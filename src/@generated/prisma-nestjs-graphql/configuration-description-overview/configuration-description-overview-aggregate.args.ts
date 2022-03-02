import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereInput } from './configuration-description-overview-where.input';
import { ConfigurationDescriptionOverviewOrderByWithRelationInput } from './configuration-description-overview-order-by-with-relation.input';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewCountAggregateInput } from './configuration-description-overview-count-aggregate.input';
import { ConfigurationDescriptionOverviewAvgAggregateInput } from './configuration-description-overview-avg-aggregate.input';
import { ConfigurationDescriptionOverviewSumAggregateInput } from './configuration-description-overview-sum-aggregate.input';
import { ConfigurationDescriptionOverviewMinAggregateInput } from './configuration-description-overview-min-aggregate.input';
import { ConfigurationDescriptionOverviewMaxAggregateInput } from './configuration-description-overview-max-aggregate.input';

@ArgsType()
export class ConfigurationDescriptionOverviewAggregateArgs {

    @Field(() => ConfigurationDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationDescriptionOverviewWhereInput;

    @Field(() => [ConfigurationDescriptionOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationDescriptionOverviewOrderByWithRelationInput>;

    @Field(() => ConfigurationDescriptionOverviewWhereUniqueInput, {nullable:true})
    cursor?: ConfigurationDescriptionOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConfigurationDescriptionOverviewCountAggregateInput, {nullable:true})
    _count?: ConfigurationDescriptionOverviewCountAggregateInput;

    @Field(() => ConfigurationDescriptionOverviewAvgAggregateInput, {nullable:true})
    _avg?: ConfigurationDescriptionOverviewAvgAggregateInput;

    @Field(() => ConfigurationDescriptionOverviewSumAggregateInput, {nullable:true})
    _sum?: ConfigurationDescriptionOverviewSumAggregateInput;

    @Field(() => ConfigurationDescriptionOverviewMinAggregateInput, {nullable:true})
    _min?: ConfigurationDescriptionOverviewMinAggregateInput;

    @Field(() => ConfigurationDescriptionOverviewMaxAggregateInput, {nullable:true})
    _max?: ConfigurationDescriptionOverviewMaxAggregateInput;
}
