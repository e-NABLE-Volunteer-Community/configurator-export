import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateNestedOneWithoutPairingInput } from '../component-parameter/component-parameter-create-nested-one-without-pairing.input';
import { ConfigurationDescriptionCreateNestedOneWithoutPairingsInput } from '../configuration-description/configuration-description-create-nested-one-without-pairings.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateInput {

    @Field(() => ComponentParameterCreateNestedOneWithoutPairingInput, {nullable:false})
    componentParameter!: ComponentParameterCreateNestedOneWithoutPairingInput;

    @Field(() => ConfigurationDescriptionCreateNestedOneWithoutPairingsInput, {nullable:false})
    configurationDescription!: ConfigurationDescriptionCreateNestedOneWithoutPairingsInput;
}
