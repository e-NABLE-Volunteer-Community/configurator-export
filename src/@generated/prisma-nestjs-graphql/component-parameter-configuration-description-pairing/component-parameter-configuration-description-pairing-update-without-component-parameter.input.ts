import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionUpdateOneRequiredWithoutPairingsInput } from '../configuration-description/configuration-description-update-one-required-without-pairings.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput {

    @Field(() => ConfigurationDescriptionUpdateOneRequiredWithoutPairingsInput, {nullable:true})
    configurationDescription?: ConfigurationDescriptionUpdateOneRequiredWithoutPairingsInput;
}
