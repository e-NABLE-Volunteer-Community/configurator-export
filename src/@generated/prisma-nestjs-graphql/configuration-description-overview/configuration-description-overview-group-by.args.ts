import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereInput } from './configuration-description-overview-where.input';
import { ConfigurationDescriptionOverviewOrderByWithAggregationInput } from './configuration-description-overview-order-by-with-aggregation.input';
import { ConfigurationDescriptionOverviewScalarFieldEnum } from './configuration-description-overview-scalar-field.enum';
import { ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput } from './configuration-description-overview-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewCountAggregateInput } from './configuration-description-overview-count-aggregate.input';
import { ConfigurationDescriptionOverviewAvgAggregateInput } from './configuration-description-overview-avg-aggregate.input';
import { ConfigurationDescriptionOverviewSumAggregateInput } from './configuration-description-overview-sum-aggregate.input';
import { ConfigurationDescriptionOverviewMinAggregateInput } from './configuration-description-overview-min-aggregate.input';
import { ConfigurationDescriptionOverviewMaxAggregateInput } from './configuration-description-overview-max-aggregate.input';

@ArgsType()
export class ConfigurationDescriptionOverviewGroupByArgs {

    @Field(() => ConfigurationDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationDescriptionOverviewWhereInput;

    @Field(() => [ConfigurationDescriptionOverviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConfigurationDescriptionOverviewOrderByWithAggregationInput>;

    @Field(() => [ConfigurationDescriptionOverviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConfigurationDescriptionOverviewScalarFieldEnum>;

    @Field(() => ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput;

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
