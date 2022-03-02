import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from '../prisma/configuration-description-kind.enum';
import { ComponentParameterConfigurationDescriptionPairingUncheckedCreateNestedManyWithoutConfigurationDescriptionInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-unchecked-create-nested-many-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionUncheckedCreateWithoutOverviewsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    configurationSetDescriptionId!: number;

    @Field(() => ConfigurationDescriptionKind, {nullable:false})
    kind!: keyof typeof ConfigurationDescriptionKind;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUncheckedCreateNestedManyWithoutConfigurationDescriptionInput, {nullable:true})
    pairings?: ComponentParameterConfigurationDescriptionPairingUncheckedCreateNestedManyWithoutConfigurationDescriptionInput;
}
