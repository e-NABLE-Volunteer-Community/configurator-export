import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ConfigurationSetDescriptionScalarWhereWithAggregatesInput {

    @Field(() => [ConfigurationSetDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConfigurationSetDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigurationSetDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConfigurationSetDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigurationSetDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConfigurationSetDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
