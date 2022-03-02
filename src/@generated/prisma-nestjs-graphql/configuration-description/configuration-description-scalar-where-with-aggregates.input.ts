import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumConfigurationDescriptionKindWithAggregatesFilter } from '../prisma/enum-configuration-description-kind-with-aggregates-filter.input';

@InputType()
export class ConfigurationDescriptionScalarWhereWithAggregatesInput {

    @Field(() => [ConfigurationDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConfigurationDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigurationDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConfigurationDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigurationDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConfigurationDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    configurationSetDescriptionId?: IntWithAggregatesFilter;

    @Field(() => EnumConfigurationDescriptionKindWithAggregatesFilter, {nullable:true})
    kind?: EnumConfigurationDescriptionKindWithAggregatesFilter;
}
