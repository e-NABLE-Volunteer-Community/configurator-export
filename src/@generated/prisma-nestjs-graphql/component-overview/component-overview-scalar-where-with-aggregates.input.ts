import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ComponentOverviewScalarWhereWithAggregatesInput {

    @Field(() => [ComponentOverviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ComponentOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [ComponentOverviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ComponentOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [ComponentOverviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ComponentOverviewScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    componentId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locale?: StringWithAggregatesFilter;
}
