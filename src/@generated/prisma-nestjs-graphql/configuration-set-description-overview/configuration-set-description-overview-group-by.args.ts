import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereInput } from './configuration-set-description-overview-where.input';
import { ConfigurationSetDescriptionOverviewOrderByWithAggregationInput } from './configuration-set-description-overview-order-by-with-aggregation.input';
import { ConfigurationSetDescriptionOverviewScalarFieldEnum } from './configuration-set-description-overview-scalar-field.enum';
import { ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput } from './configuration-set-description-overview-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCountAggregateInput } from './configuration-set-description-overview-count-aggregate.input';
import { ConfigurationSetDescriptionOverviewAvgAggregateInput } from './configuration-set-description-overview-avg-aggregate.input';
import { ConfigurationSetDescriptionOverviewSumAggregateInput } from './configuration-set-description-overview-sum-aggregate.input';
import { ConfigurationSetDescriptionOverviewMinAggregateInput } from './configuration-set-description-overview-min-aggregate.input';
import { ConfigurationSetDescriptionOverviewMaxAggregateInput } from './configuration-set-description-overview-max-aggregate.input';

@ArgsType()
export class ConfigurationSetDescriptionOverviewGroupByArgs {

    @Field(() => ConfigurationSetDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionOverviewWhereInput;

    @Field(() => [ConfigurationSetDescriptionOverviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConfigurationSetDescriptionOverviewOrderByWithAggregationInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConfigurationSetDescriptionOverviewScalarFieldEnum>;

    @Field(() => ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput;

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
