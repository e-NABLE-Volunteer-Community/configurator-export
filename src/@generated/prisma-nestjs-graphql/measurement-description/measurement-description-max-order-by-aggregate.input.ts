import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MeasurementDescriptionMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    measurementSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;
}
