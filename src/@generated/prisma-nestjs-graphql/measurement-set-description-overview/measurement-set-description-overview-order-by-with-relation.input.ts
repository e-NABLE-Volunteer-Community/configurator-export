import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MeasurementSetDescriptionOrderByWithRelationInput } from '../measurement-set-description/measurement-set-description-order-by-with-relation.input';

@InputType()
export class MeasurementSetDescriptionOverviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => MeasurementSetDescriptionOrderByWithRelationInput, {nullable:true})
    measurementSetDescription?: MeasurementSetDescriptionOrderByWithRelationInput;
}
