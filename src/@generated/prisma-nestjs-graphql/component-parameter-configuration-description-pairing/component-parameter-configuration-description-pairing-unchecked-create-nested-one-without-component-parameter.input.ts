import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput } from './component-parameter-configuration-description-pairing-create-or-connect-without-component-parameter.input';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingUncheckedCreateNestedOneWithoutComponentParameterInput {

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput, {nullable:true})
    create?: ComponentParameterConfigurationDescriptionPairingCreateWithoutComponentParameterInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput, {nullable:true})
    connectOrCreate?: ComponentParameterConfigurationDescriptionPairingCreateOrConnectWithoutComponentParameterInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:true})
    connect?: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;
}
