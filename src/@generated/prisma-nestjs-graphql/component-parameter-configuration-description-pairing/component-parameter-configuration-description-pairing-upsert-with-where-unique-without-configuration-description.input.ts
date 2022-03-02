import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-update-without-configuration-description.input';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-create-without-configuration-description.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpsertWithWhereUniqueWithoutConfigurationDescriptionInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateWithoutConfigurationDescriptionInput, {nullable:false})
    update!: ComponentParameterConfigurationDescriptionPairingUpdateWithoutConfigurationDescriptionInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput, {nullable:false})
    create!: ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput;
}
