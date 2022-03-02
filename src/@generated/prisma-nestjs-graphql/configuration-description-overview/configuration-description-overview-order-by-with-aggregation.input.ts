import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigurationDescriptionOverviewCountOrderByAggregateInput } from './configuration-description-overview-count-order-by-aggregate.input';
import { ConfigurationDescriptionOverviewAvgOrderByAggregateInput } from './configuration-description-overview-avg-order-by-aggregate.input';
import { ConfigurationDescriptionOverviewMaxOrderByAggregateInput } from './configuration-description-overview-max-order-by-aggregate.input';
import { ConfigurationDescriptionOverviewMinOrderByAggregateInput } from './configuration-description-overview-min-order-by-aggregate.input';
import { ConfigurationDescriptionOverviewSumOrderByAggregateInput } from './configuration-description-overview-sum-order-by-aggregate.input';

@InputType()
export class ConfigurationDescriptionOverviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => ConfigurationDescriptionOverviewCountOrderByAggregateInput, {nullable:true})
    _count?: ConfigurationDescriptionOverviewCountOrderByAggregateInput;

    @Field(() => ConfigurationDescriptionOverviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: ConfigurationDescriptionOverviewAvgOrderByAggregateInput;

    @Field(() => ConfigurationDescriptionOverviewMaxOrderByAggregateInput, {nullable:true})
    _max?: ConfigurationDescriptionOverviewMaxOrderByAggregateInput;

    @Field(() => ConfigurationDescriptionOverviewMinOrderByAggregateInput, {nullable:true})
    _min?: ConfigurationDescriptionOverviewMinOrderByAggregateInput;

    @Field(() => ConfigurationDescriptionOverviewSumOrderByAggregateInput, {nullable:true})
    _sum?: ConfigurationDescriptionOverviewSumOrderByAggregateInput;
}
