import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput {

    @Field(() => [ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConfigurationDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    configurationDescriptionId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locale?: StringWithAggregatesFilter;
}
