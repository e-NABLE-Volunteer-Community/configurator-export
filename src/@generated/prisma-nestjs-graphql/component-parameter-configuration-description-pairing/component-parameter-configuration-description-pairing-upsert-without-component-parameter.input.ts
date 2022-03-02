import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-update-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-without-component-parameter.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUpsertWithoutComponentParameterInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput, {nullable:false})
    update!: ComponentParameterConfigurationDescriptionPairingUpdateWithoutComponentParameterInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput, {nullable:false})
    create!: ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput;
}
