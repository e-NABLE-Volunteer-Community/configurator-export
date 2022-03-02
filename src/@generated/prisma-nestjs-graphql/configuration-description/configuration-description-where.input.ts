import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumConfigurationDescriptionKindFilter } from '../prisma/enum-configuration-description-kind-filter.input';
import { ConfigurationSetDescriptionRelationFilter } from '../configuration-set-description/configuration-set-description-relation-filter.input';
import { ConfigurationDescriptionOverviewListRelationFilter } from '../configuration-description-overview/configuration-description-overview-list-relation-filter.input';
import { ComponentParameterConfigurationDescriptionPairingListRelationFilter } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-list-relation-filter.input';

@InputType()
export class ConfigurationDescriptionWhereInput {

    @Field(() => [ConfigurationDescriptionWhereInput], {nullable:true})
    AND?: Array<ConfigurationDescriptionWhereInput>;

    @Field(() => [ConfigurationDescriptionWhereInput], {nullable:true})
    OR?: Array<ConfigurationDescriptionWhereInput>;

    @Field(() => [ConfigurationDescriptionWhereInput], {nullable:true})
    NOT?: Array<ConfigurationDescriptionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    configurationSetDescriptionId?: IntFilter;

    @Field(() => EnumConfigurationDescriptionKindFilter, {nullable:true})
    kind?: EnumConfigurationDescriptionKindFilter;

    @Field(() => ConfigurationSetDescriptionRelationFilter, {nullable:true})
    configurationSetDescription?: ConfigurationSetDescriptionRelationFilter;

    @Field(() => ConfigurationDescriptionOverviewListRelationFilter, {nullable:true})
    overviews?: ConfigurationDescriptionOverviewListRelationFilter;

    @Field(() => ComponentParameterConfigurationDescriptionPairingListRelationFilter, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingListRelationFilter;
}
