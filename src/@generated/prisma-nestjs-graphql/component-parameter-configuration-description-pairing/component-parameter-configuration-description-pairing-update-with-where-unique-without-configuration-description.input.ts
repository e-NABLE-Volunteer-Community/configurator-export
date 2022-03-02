import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateWithoutConfigurationDescriptionInput } from './component-parameter-configuration-description-pairing-update-without-configuration-description.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpdateWithWhereUniqueWithoutConfigurationDescriptionInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateWithoutConfigurationDescriptionInput, {nullable:false})
    data!: ComponentParameterConfigurationDescriptionPairingUpdateWithoutConfigurationDescriptionInput;
}
