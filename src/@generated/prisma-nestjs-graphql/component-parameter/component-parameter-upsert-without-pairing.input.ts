import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterUpdateWithoutPairingInput } from './component-parameter-update-without-pairing.input';
import { ComponentParameterCreateWithoutPairingInput } from './component-parameter-create-without-pairing.input';

@InputType()
export class ComponentParameterUpsertWithoutPairingInput {

    @Field(() => ComponentParameterUpdateWithoutPairingInput, {nullable:false})
    update!: ComponentParameterUpdateWithoutPairingInput;

    @Field(() => ComponentParameterCreateWithoutPairingInput, {nullable:false})
    create!: ComponentParameterCreateWithoutPairingInput;
}
