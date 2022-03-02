import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigurationSetDescriptionOverviewOrderByRelationAggregateInput } from '../configuration-set-description-overview/configuration-set-description-overview-order-by-relation-aggregate.input';
import { ConfigurationDescriptionOrderByRelationAggregateInput } from '../configuration-description/configuration-description-order-by-relation-aggregate.input';
import { DeviceOrderByRelationAggregateInput } from '../device/device-order-by-relation-aggregate.input';

@InputType()
export class ConfigurationSetDescriptionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ConfigurationSetDescriptionOverviewOrderByRelationAggregateInput, {nullable:true})
    overviews?: ConfigurationSetDescriptionOverviewOrderByRelationAggregateInput;

    @Field(() => ConfigurationDescriptionOrderByRelationAggregateInput, {nullable:true})
    configurations?: ConfigurationDescriptionOrderByRelationAggregateInput;

    @Field(() => DeviceOrderByRelationAggregateInput, {nullable:true})
    deviceMeasurements?: DeviceOrderByRelationAggregateInput;

    @Field(() => DeviceOrderByRelationAggregateInput, {nullable:true})
    deviceOptions?: DeviceOrderByRelationAggregateInput;
}
