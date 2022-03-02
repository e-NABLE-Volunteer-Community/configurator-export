import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-without-component-parameter.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:false})
    where!: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput, {nullable:false})
    create!: ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput;
}
