import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigurationSetDescriptionOrderByWithRelationInput } from '../configuration-set-description/configuration-set-description-order-by-with-relation.input';
import { ConfigurationDescriptionOverviewOrderByRelationAggregateInput } from '../configuration-description-overview/configuration-description-overview-order-by-relation-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingOrderByRelationAggregateInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-order-by-relation-aggregate.input';

@InputType()
export class ConfigurationDescriptionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;

    @Field(() => ConfigurationSetDescriptionOrderByWithRelationInput, {nullable:true})
    configurationSetDescription?: ConfigurationSetDescriptionOrderByWithRelationInput;

    @Field(() => ConfigurationDescriptionOverviewOrderByRelationAggregateInput, {nullable:true})
    overviews?: ConfigurationDescriptionOverviewOrderByRelationAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingOrderByRelationAggregateInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingOrderByRelationAggregateInput;
}
