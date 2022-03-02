import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigurationSetDescriptionCountOrderByAggregateInput } from './configuration-set-description-count-order-by-aggregate.input';
import { ConfigurationSetDescriptionAvgOrderByAggregateInput } from './configuration-set-description-avg-order-by-aggregate.input';
import { ConfigurationSetDescriptionMaxOrderByAggregateInput } from './configuration-set-description-max-order-by-aggregate.input';
import { ConfigurationSetDescriptionMinOrderByAggregateInput } from './configuration-set-description-min-order-by-aggregate.input';
import { ConfigurationSetDescriptionSumOrderByAggregateInput } from './configuration-set-description-sum-order-by-aggregate.input';

@InputType()
export class ConfigurationSetDescriptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ConfigurationSetDescriptionCountOrderByAggregateInput, {nullable:true})
    _count?: ConfigurationSetDescriptionCountOrderByAggregateInput;

    @Field(() => ConfigurationSetDescriptionAvgOrderByAggregateInput, {nullable:true})
    _avg?: ConfigurationSetDescriptionAvgOrderByAggregateInput;

    @Field(() => ConfigurationSetDescriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: ConfigurationSetDescriptionMaxOrderByAggregateInput;

    @Field(() => ConfigurationSetDescriptionMinOrderByAggregateInput, {nullable:true})
    _min?: ConfigurationSetDescriptionMinOrderByAggregateInput;

    @Field(() => ConfigurationSetDescriptionSumOrderByAggregateInput, {nullable:true})
    _sum?: ConfigurationSetDescriptionSumOrderByAggregateInput;
}
