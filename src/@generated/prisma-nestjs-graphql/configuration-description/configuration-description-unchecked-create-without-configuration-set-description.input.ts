import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from '../prisma/configuration-description-kind.enum';
import { ConfigurationDescriptionOverviewUncheckedCreateNestedManyWithoutConfigurationDescriptionInput } from '../configuration-description-overview/configuration-description-overview-unchecked-create-nested-many-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingUncheckedCreateNestedManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-unchecked-create-nested-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionUncheckedCreateWithoutConfigurationSetDescriptionInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ConfigurationDescriptionKind, {nullable:false})
    kind!: keyof typeof ConfigurationDescriptionKind;

    @Field(() => ConfigurationDescriptionOverviewUncheckedCreateNestedManyWithoutConfigurationDescriptionInput, {nullable:true})
    overviews?: ConfigurationDescriptionOverviewUncheckedCreateNestedManyWithoutConfigurationDescriptionInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUncheckedCreateNestedManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingUncheckedCreateNestedManyWithoutConfigurationDescriptionInput;
}
