import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from '../prisma/configuration-description-kind.enum';
import { ConfigurationDescriptionOverviewCreateNestedManyWithoutConfigurationDescriptionInput } from '../configuration-description-overview/configuration-description-overview-create-nested-many-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-create-nested-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput {

    @Field(() => ConfigurationDescriptionKind, {nullable:false})
    kind!: keyof typeof ConfigurationDescriptionKind;

    @Field(() => ConfigurationDescriptionOverviewCreateNestedManyWithoutConfigurationDescriptionInput, {nullable:true})
    overviews?: ConfigurationDescriptionOverviewCreateNestedManyWithoutConfigurationDescriptionInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput;
}
