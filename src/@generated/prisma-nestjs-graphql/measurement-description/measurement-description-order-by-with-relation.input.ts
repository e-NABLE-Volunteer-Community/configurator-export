import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MeasurementSetDescriptionOrderByWithRelationInput } from '../measurement-set-description/measurement-set-description-order-by-with-relation.input';
import { MeasurementDescriptionOverviewOrderByRelationAggregateInput } from '../measurement-description-overview/measurement-description-overview-order-by-relation-aggregate.input';

@InputType()
export class MeasurementDescriptionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;

    @Field(() => MeasurementSetDescriptionOrderByWithRelationInput, {nullable:true})
    measurementSetDescription?: MeasurementSetDescriptionOrderByWithRelationInput;

    @Field(() => MeasurementDescriptionOverviewOrderByRelationAggregateInput, {nullable:true})
    overviews?: MeasurementDescriptionOverviewOrderByRelationAggregateInput;
}
