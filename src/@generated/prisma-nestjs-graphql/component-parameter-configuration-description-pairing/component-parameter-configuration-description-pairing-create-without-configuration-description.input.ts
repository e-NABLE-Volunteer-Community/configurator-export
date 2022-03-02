import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateNestedOneWithoutPairingInput } from '../component-parameter/component-parameter-create-nested-one-without-pairing.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingCreateWithoutConfigurationDescriptionInput {

    @Field(() => ComponentParameterCreateNestedOneWithoutPairingInput, {nullable:false})
    componentParameter!: ComponentParameterCreateNestedOneWithoutPairingInput;
}
