import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateNestedOneWithoutPairingsInput } from '../configuration-description/configuration-description-create-nested-one-without-pairings.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput {

    @Field(() => ConfigurationDescriptionCreateNestedOneWithoutPairingsInput, {nullable:false})
    configurationDescription!: ConfigurationDescriptionCreateNestedOneWithoutPairingsInput;
}
