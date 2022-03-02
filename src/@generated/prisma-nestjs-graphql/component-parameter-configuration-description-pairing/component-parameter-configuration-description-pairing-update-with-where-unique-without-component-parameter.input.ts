import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-update-without-component-parameter.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpdateWithWhereUniqueWithoutComponentParameterInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput, {nullable:false})
    data!: ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput;
}
