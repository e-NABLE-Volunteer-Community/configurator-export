import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ComponentParameterMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    componentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cadName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    humanName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}
