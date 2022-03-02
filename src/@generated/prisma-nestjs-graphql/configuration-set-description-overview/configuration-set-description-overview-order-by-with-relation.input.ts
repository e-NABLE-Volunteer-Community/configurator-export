import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigurationSetDescriptionOrderByWithRelationInput } from '../configuration-set-description/configuration-set-description-order-by-with-relation.input';

@InputType()
export class ConfigurationSetDescriptionOverviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationSetDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => ConfigurationSetDescriptionOrderByWithRelationInput, {nullable:true})
    configurationSetDescription?: ConfigurationSetDescriptionOrderByWithRelationInput;
}
