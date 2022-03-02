import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigurationDescriptionOrderByWithRelationInput } from '../configuration-description/configuration-description-order-by-with-relation.input';

@InputType()
export class ConfigurationDescriptionOverviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationDescriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => ConfigurationDescriptionOrderByWithRelationInput, {nullable:true})
    configurationDescription?: ConfigurationDescriptionOrderByWithRelationInput;
}
