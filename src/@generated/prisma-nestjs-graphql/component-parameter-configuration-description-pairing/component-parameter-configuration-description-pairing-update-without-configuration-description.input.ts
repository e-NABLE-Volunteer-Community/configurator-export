import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterUpdateOneRequiredWithoutPairingInput } from '../component-parameter/component-parameter-update-one-required-without-pairing.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpdateWithoutConfigurationDescriptionInput {

    @Field(() => ComponentParameterUpdateOneRequiredWithoutPairingInput, {nullable:true})
    componentParameter?: ComponentParameterUpdateOneRequiredWithoutPairingInput;
}
