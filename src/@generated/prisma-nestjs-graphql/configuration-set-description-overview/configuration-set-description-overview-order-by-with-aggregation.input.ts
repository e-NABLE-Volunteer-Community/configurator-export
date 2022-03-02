import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigurationSetDescriptionOverviewCountOrderByAggregateInput } from './configuration-set-description-overview-count-order-by-aggregate.input';
import { ConfigurationSetDescriptionOverviewAvgOrderByAggregateInput } from './configuration-set-description-overview-avg-order-by-aggregate.input';
import { ConfigurationSetDescriptionOverviewMaxOrderByAggregateInput } from './configuration-set-description-overview-max-order-by-aggregate.input';
import { ConfigurationSetDescriptionOverviewMinOrderByAggregateInput } from './configuration-set-description-overview-min-order-by-aggregate.input';
import { ConfigurationSetDescriptionOverviewSumOrderByAggregateInput } from './configuration-set-description-overview-sum-order-by-aggregate.input';

@InputType()
export class ConfigurationSetDescriptionOverviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => ConfigurationSetDescriptionOverviewCountOrderByAggregateInput, {nullable:true})
    _count?: ConfigurationSetDescriptionOverviewCountOrderByAggregateInput;

    @Field(() => ConfigurationSetDescriptionOverviewAvgOrderByAggregateInput, {nullable:true})
    _avg?: ConfigurationSetDescriptionOverviewAvgOrderByAggregateInput;

    @Field(() => ConfigurationSetDescriptionOverviewMaxOrderByAggregateInput, {nullable:true})
    _max?: ConfigurationSetDescriptionOverviewMaxOrderByAggregateInput;

    @Field(() => ConfigurationSetDescriptionOverviewMinOrderByAggregateInput, {nullable:true})
    _min?: ConfigurationSetDescriptionOverviewMinOrderByAggregateInput;

    @Field(() => ConfigurationSetDescriptionOverviewSumOrderByAggregateInput, {nullable:true})
    _sum?: ConfigurationSetDescriptionOverviewSumOrderByAggregateInput;
}
