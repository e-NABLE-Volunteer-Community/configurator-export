import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigurationDescriptionCountOrderByAggregateInput } from './configuration-description-count-order-by-aggregate.input';
import { ConfigurationDescriptionAvgOrderByAggregateInput } from './configuration-description-avg-order-by-aggregate.input';
import { ConfigurationDescriptionMaxOrderByAggregateInput } from './configuration-description-max-order-by-aggregate.input';
import { ConfigurationDescriptionMinOrderByAggregateInput } from './configuration-description-min-order-by-aggregate.input';
import { ConfigurationDescriptionSumOrderByAggregateInput } from './configuration-description-sum-order-by-aggregate.input';

@InputType()
export class ConfigurationDescriptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;

    @Field(() => ConfigurationDescriptionCountOrderByAggregateInput, {nullable:true})
    _count?: ConfigurationDescriptionCountOrderByAggregateInput;

    @Field(() => ConfigurationDescriptionAvgOrderByAggregateInput, {nullable:true})
    _avg?: ConfigurationDescriptionAvgOrderByAggregateInput;

    @Field(() => ConfigurationDescriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: ConfigurationDescriptionMaxOrderByAggregateInput;

    @Field(() => ConfigurationDescriptionMinOrderByAggregateInput, {nullable:true})
    _min?: ConfigurationDescriptionMinOrderByAggregateInput;

    @Field(() => ConfigurationDescriptionSumOrderByAggregateInput, {nullable:true})
    _sum?: ConfigurationDescriptionSumOrderByAggregateInput;
}
