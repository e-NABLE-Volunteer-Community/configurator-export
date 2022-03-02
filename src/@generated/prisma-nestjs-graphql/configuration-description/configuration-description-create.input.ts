import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from '../prisma/configuration-description-kind.enum';
import { ConfigurationSetDescriptionCreateNestedOneWithoutConfigurationsInput } from '../configuration-set-description/configuration-set-description-create-nested-one-without-configurations.input';
import { ConfigurationDescriptionOverviewCreateNestedManyWithoutConfigurationDescriptionInput } from '../configuration-description-overview/configuration-description-overview-create-nested-many-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-create-nested-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionCreateInput {

    @Field(() => ConfigurationDescriptionKind, {nullable:false})
    kind!: keyof typeof ConfigurationDescriptionKind;

    @Field(() => ConfigurationSetDescriptionCreateNestedOneWithoutConfigurationsInput, {nullable:false})
    configurationSetDescription!: ConfigurationSetDescriptionCreateNestedOneWithoutConfigurationsInput;

    @Field(() => ConfigurationDescriptionOverviewCreateNestedManyWithoutConfigurationDescriptionInput, {nullable:true})
    overviews?: ConfigurationDescriptionOverviewCreateNestedManyWithoutConfigurationDescriptionInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput;
}
