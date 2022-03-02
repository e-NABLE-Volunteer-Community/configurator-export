import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereInput } from './configuration-set-description-where.input';
import { ConfigurationSetDescriptionOrderByWithAggregationInput } from './configuration-set-description-order-by-with-aggregation.input';
import { ConfigurationSetDescriptionScalarFieldEnum } from './configuration-set-description-scalar-field.enum';
import { ConfigurationSetDescriptionScalarWhereWithAggregatesInput } from './configuration-set-description-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCountAggregateInput } from './configuration-set-description-count-aggregate.input';
import { ConfigurationSetDescriptionAvgAggregateInput } from './configuration-set-description-avg-aggregate.input';
import { ConfigurationSetDescriptionSumAggregateInput } from './configuration-set-description-sum-aggregate.input';
import { ConfigurationSetDescriptionMinAggregateInput } from './configuration-set-description-min-aggregate.input';
import { ConfigurationSetDescriptionMaxAggregateInput } from './configuration-set-description-max-aggregate.input';

@ArgsType()
export class ConfigurationSetDescriptionGroupByArgs {

    @Field(() => ConfigurationSetDescriptionWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionWhereInput;

    @Field(() => [ConfigurationSetDescriptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConfigurationSetDescriptionOrderByWithAggregationInput>;

    @Field(() => [ConfigurationSetDescriptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConfigurationSetDescriptionScalarFieldEnum>;

    @Field(() => ConfigurationSetDescriptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: ConfigurationSetDescriptionScalarWhereWithAggregatesInput;

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
