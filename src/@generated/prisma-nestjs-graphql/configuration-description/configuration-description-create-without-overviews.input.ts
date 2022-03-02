import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from '../prisma/configuration-description-kind.enum';
import { ConfigurationSetDescriptionCreateNestedOneWithoutConfigurationsInput } from '../configuration-set-description/configuration-set-description-create-nested-one-without-configurations.input';
import { ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-create-nested-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionCreateWithoutOverviewsInput {

    @Field(() => ConfigurationDescriptionKind, {nullable:false})
    kind!: keyof typeof ConfigurationDescriptionKind;

    @Field(() => ConfigurationSetDescriptionCreateNestedOneWithoutConfigurationsInput, {nullable:false})
    configurationSetDescription!: ConfigurationSetDescriptionCreateNestedOneWithoutConfigurationsInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingCreateNestedManyWithoutConfigurationDescriptionInput;
}
