import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterUpdateOneRequiredWithoutPairingInput } from '../component-parameter/component-parameter-update-one-required-without-pairing.input';
import { ConfigurationDescriptionUpdateOneRequiredWithoutPairingsInput } from '../configuration-description/configuration-description-update-one-required-without-pairings.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpdateInput {

    @Field(() => ComponentParameterUpdateOneRequiredWithoutPairingInput, {nullable:true})
    componentParameter?: ComponentParameterUpdateOneRequiredWithoutPairingInput;

    @Field(() => ConfigurationDescriptionUpdateOneRequiredWithoutPairingsInput, {nullable:true})
    configurationDescription?: ConfigurationDescriptionUpdateOneRequiredWithoutPairingsInput;
}
