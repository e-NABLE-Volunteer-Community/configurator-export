import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MeasurementSetDescriptionOverviewOrderByRelationAggregateInput } from '../measurement-set-description-overview/measurement-set-description-overview-order-by-relation-aggregate.input';
import { MeasurementDescriptionOrderByRelationAggregateInput } from '../measurement-description/measurement-description-order-by-relation-aggregate.input';
import { DeviceOrderByRelationAggregateInput } from '../device/device-order-by-relation-aggregate.input';

@InputType()
export class MeasurementSetDescriptionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => MeasurementSetDescriptionOverviewOrderByRelationAggregateInput, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewOrderByRelationAggregateInput;

    @Field(() => MeasurementDescriptionOrderByRelationAggregateInput, {nullable:true})
    measurements?: MeasurementDescriptionOrderByRelationAggregateInput;

    @Field(() => DeviceOrderByRelationAggregateInput, {nullable:true})
    devices?: DeviceOrderByRelationAggregateInput;
}
