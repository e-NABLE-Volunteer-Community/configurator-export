import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereInput } from './configuration-description-where.input';
import { ConfigurationDescriptionOrderByWithAggregationInput } from './configuration-description-order-by-with-aggregation.input';
import { ConfigurationDescriptionScalarFieldEnum } from './configuration-description-scalar-field.enum';
import { ConfigurationDescriptionScalarWhereWithAggregatesInput } from './configuration-description-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionCountAggregateInput } from './configuration-description-count-aggregate.input';
import { ConfigurationDescriptionAvgAggregateInput } from './configuration-description-avg-aggregate.input';
import { ConfigurationDescriptionSumAggregateInput } from './configuration-description-sum-aggregate.input';
import { ConfigurationDescriptionMinAggregateInput } from './configuration-description-min-aggregate.input';
import { ConfigurationDescriptionMaxAggregateInput } from './configuration-description-max-aggregate.input';

@ArgsType()
export class ConfigurationDescriptionGroupByArgs {

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    where?: ConfigurationDescriptionWhereInput;

    @Field(() => [ConfigurationDescriptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConfigurationDescriptionOrderByWithAggregationInput>;

    @Field(() => [ConfigurationDescriptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConfigurationDescriptionScalarFieldEnum>;

    @Field(() => ConfigurationDescriptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: ConfigurationDescriptionScalarWhereWithAggregatesInput;

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
