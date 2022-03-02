import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ConfigurationSetDescriptionOverviewScalarWhereInput {

    @Field(() => [ConfigurationSetDescriptionOverviewScalarWhereInput], {nullable:true})
    AND?: Array<ConfigurationSetDescriptionOverviewScalarWhereInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewScalarWhereInput], {nullable:true})
    OR?: Array<ConfigurationSetDescriptionOverviewScalarWhereInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewScalarWhereInput], {nullable:true})
    NOT?: Array<ConfigurationSetDescriptionOverviewScalarWhereInput>;

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
}
