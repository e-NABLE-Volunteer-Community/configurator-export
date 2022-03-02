import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumConfigurationDescriptionKindFilter } from '../prisma/enum-configuration-description-kind-filter.input';

@InputType()
export class ConfigurationDescriptionScalarWhereInput {

    @Field(() => [ConfigurationDescriptionScalarWhereInput], {nullable:true})
    AND?: Array<ConfigurationDescriptionScalarWhereInput>;

    @Field(() => [ConfigurationDescriptionScalarWhereInput], {nullable:true})
    OR?: Array<ConfigurationDescriptionScalarWhereInput>;

    @Field(() => [ConfigurationDescriptionScalarWhereInput], {nullable:true})
    NOT?: Array<ConfigurationDescriptionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    configurationSetDescriptionId?: IntFilter;

    @Field(() => EnumConfigurationDescriptionKindFilter, {nullable:true})
    kind?: EnumConfigurationDescriptionKindFilter;
}
