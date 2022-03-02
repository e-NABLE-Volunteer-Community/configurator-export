import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComponentOrderByRelationAggregateInput } from '../component/component-order-by-relation-aggregate.input';
import { DeviceAuthorOrderByRelationAggregateInput } from '../device-author/device-author-order-by-relation-aggregate.input';
import { DeviceExtraOrderByRelationAggregateInput } from '../device-extra/device-extra-order-by-relation-aggregate.input';
import { DeviceImageOrderByRelationAggregateInput } from '../device-image/device-image-order-by-relation-aggregate.input';
import { DeviceOverviewOrderByRelationAggregateInput } from '../device-overview/device-overview-order-by-relation-aggregate.input';
import { ConfigurationSetDescriptionOrderByWithRelationInput } from '../configuration-set-description/configuration-set-description-order-by-with-relation.input';

@InputType()
export class DeviceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    optionSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ComponentOrderByRelationAggregateInput, {nullable:true})
    components?: ComponentOrderByRelationAggregateInput;

    @Field(() => DeviceAuthorOrderByRelationAggregateInput, {nullable:true})
    deviceAuthors?: DeviceAuthorOrderByRelationAggregateInput;

    @Field(() => DeviceExtraOrderByRelationAggregateInput, {nullable:true})
    deviceExtras?: DeviceExtraOrderByRelationAggregateInput;

    @Field(() => DeviceImageOrderByRelationAggregateInput, {nullable:true})
    deviceImages?: DeviceImageOrderByRelationAggregateInput;

    @Field(() => DeviceOverviewOrderByRelationAggregateInput, {nullable:true})
    deviceOverviews?: DeviceOverviewOrderByRelationAggregateInput;

    @Field(() => ConfigurationSetDescriptionOrderByWithRelationInput, {nullable:true})
    measurementSetDescription?: ConfigurationSetDescriptionOrderByWithRelationInput;

    @Field(() => ConfigurationSetDescriptionOrderByWithRelationInput, {nullable:true})
    optionSetDescription?: ConfigurationSetDescriptionOrderByWithRelationInput;
}
