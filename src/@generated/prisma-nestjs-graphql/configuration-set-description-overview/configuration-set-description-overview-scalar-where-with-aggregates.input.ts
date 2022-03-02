import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput {

    @Field(() => [ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConfigurationSetDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    configurationSetDescriptionId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locale?: StringWithAggregatesFilter;
}
