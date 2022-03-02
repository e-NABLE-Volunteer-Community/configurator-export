import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ConfigurationSetDescriptionRelationFilter } from '../configuration-set-description/configuration-set-description-relation-filter.input';

@InputType()
export class ConfigurationSetDescriptionOverviewWhereInput {

    @Field(() => [ConfigurationSetDescriptionOverviewWhereInput], {nullable:true})
    AND?: Array<ConfigurationSetDescriptionOverviewWhereInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewWhereInput], {nullable:true})
    OR?: Array<ConfigurationSetDescriptionOverviewWhereInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewWhereInput], {nullable:true})
    NOT?: Array<ConfigurationSetDescriptionOverviewWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    configurationSetDescriptionId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    locale?: StringFilter;

    @Field(() => ConfigurationSetDescriptionRelationFilter, {nullable:true})
    configurationSetDescription?: ConfigurationSetDescriptionRelationFilter;
}
