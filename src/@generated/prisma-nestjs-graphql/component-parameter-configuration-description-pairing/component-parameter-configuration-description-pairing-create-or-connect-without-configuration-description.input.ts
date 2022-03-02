import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-create-without-configuration-description.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutConfigurationDescriptionInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput, {nullable:false})
    create!: ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput;
}
