import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComponentParameterConfigurationDescriptionPairingCountOrderByAggregateInput } from './component-parameter-configuration-description-pairing-count-order-by-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingAvgOrderByAggregateInput } from './component-parameter-configuration-description-pairing-avg-order-by-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingMaxOrderByAggregateInput } from './component-parameter-configuration-description-pairing-max-order-by-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingMinOrderByAggregateInput } from './component-parameter-configuration-description-pairing-min-order-by-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingSumOrderByAggregateInput } from './component-parameter-configuration-description-pairing-sum-order-by-aggregate.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    componentParameterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationDescriptionId?: keyof typeof SortOrder;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCountOrderByAggregateInput, {nullable:true})
    _count?: ComponentParameterConfigurationDescriptionPairingCountOrderByAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingAvgOrderByAggregateInput, {nullable:true})
    _avg?: ComponentParameterConfigurationDescriptionPairingAvgOrderByAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingMaxOrderByAggregateInput, {nullable:true})
    _max?: ComponentParameterConfigurationDescriptionPairingMaxOrderByAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingMinOrderByAggregateInput, {nullable:true})
    _min?: ComponentParameterConfigurationDescriptionPairingMinOrderByAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingSumOrderByAggregateInput, {nullable:true})
    _sum?: ComponentParameterConfigurationDescriptionPairingSumOrderByAggregateInput;
}
