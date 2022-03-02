import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ConfigurationDescriptionRelationFilter } from '../configuration-description/configuration-description-relation-filter.input';

@InputType()
export class ConfigurationDescriptionOverviewWhereInput {

    @Field(() => [ConfigurationDescriptionOverviewWhereInput], {nullable:true})
    AND?: Array<ConfigurationDescriptionOverviewWhereInput>;

    @Field(() => [ConfigurationDescriptionOverviewWhereInput], {nullable:true})
    OR?: Array<ConfigurationDescriptionOverviewWhereInput>;

    @Field(() => [ConfigurationDescriptionOverviewWhereInput], {nullable:true})
    NOT?: Array<ConfigurationDescriptionOverviewWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    configurationDescriptionId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    locale?: StringFilter;

    @Field(() => ConfigurationDescriptionRelationFilter, {nullable:true})
    configurationDescription?: ConfigurationDescriptionRelationFilter;
}
