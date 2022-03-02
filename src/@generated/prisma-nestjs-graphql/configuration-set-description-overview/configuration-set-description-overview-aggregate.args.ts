import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereInput } from './configuration-set-description-overview-where.input';
import { ConfigurationSetDescriptionOverviewOrderByWithRelationInput } from './configuration-set-description-overview-order-by-with-relation.input';
import { ConfigurationSetDescriptionOverviewWhereUniqueInput } from './configuration-set-description-overview-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCountAggregateInput } from './configuration-set-description-overview-count-aggregate.input';
import { ConfigurationSetDescriptionOverviewAvgAggregateInput } from './configuration-set-description-overview-avg-aggregate.input';
import { ConfigurationSetDescriptionOverviewSumAggregateInput } from './configuration-set-description-overview-sum-aggregate.input';
import { ConfigurationSetDescriptionOverviewMinAggregateInput } from './configuration-set-description-overview-min-aggregate.input';
import { ConfigurationSetDescriptionOverviewMaxAggregateInput } from './configuration-set-description-overview-max-aggregate.input';

@ArgsType()
export class ConfigurationSetDescriptionOverviewAggregateArgs {

    @Field(() => ConfigurationSetDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionOverviewWhereInput;

    @Field(() => [ConfigurationSetDescriptionOverviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConfigurationSetDescriptionOverviewOrderByWithRelationInput>;

    @Field(() => ConfigurationSetDescriptionOverviewWhereUniqueInput, {nullable:true})
    cursor?: ConfigurationSetDescriptionOverviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConfigurationSetDescriptionOverviewCountAggregateInput, {nullable:true})
    _count?: ConfigurationSetDescriptionOverviewCountAggregateInput;

    @Field(() => ConfigurationSetDescriptionOverviewAvgAggregateInput, {nullable:true})
    _avg?: ConfigurationSetDescriptionOverviewAvgAggregateInput;

    @Field(() => ConfigurationSetDescriptionOverviewSumAggregateInput, {nullable:true})
    _sum?: ConfigurationSetDescriptionOverviewSumAggregateInput;

    @Field(() => ConfigurationSetDescriptionOverviewMinAggregateInput, {nullable:true})
    _min?: ConfigurationSetDescriptionOverviewMinAggregateInput;

    @Field(() => ConfigurationSetDescriptionOverviewMaxAggregateInput, {nullable:true})
    _max?: ConfigurationSetDescriptionOverviewMaxAggregateInput;
}
