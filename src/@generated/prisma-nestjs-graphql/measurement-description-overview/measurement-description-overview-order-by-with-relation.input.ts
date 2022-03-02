import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MeasurementDescriptionOrderByWithRelationInput } from '../measurement-description/measurement-description-order-by-with-relation.input';

@InputType()
export class MeasurementDescriptionOverviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => MeasurementDescriptionOrderByWithRelationInput, {nullable:true})
    measurementDescription?: MeasurementDescriptionOrderByWithRelationInput;
}
