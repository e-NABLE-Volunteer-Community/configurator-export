import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ConfigurationDescriptionOverviewScalarWhereInput {

    @Field(() => [ConfigurationDescriptionOverviewScalarWhereInput], {nullable:true})
    AND?: Array<ConfigurationDescriptionOverviewScalarWhereInput>;

    @Field(() => [ConfigurationDescriptionOverviewScalarWhereInput], {nullable:true})
    OR?: Array<ConfigurationDescriptionOverviewScalarWhereInput>;

    @Field(() => [ConfigurationDescriptionOverviewScalarWhereInput], {nullable:true})
    NOT?: Array<ConfigurationDescriptionOverviewScalarWhereInput>;

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
}
