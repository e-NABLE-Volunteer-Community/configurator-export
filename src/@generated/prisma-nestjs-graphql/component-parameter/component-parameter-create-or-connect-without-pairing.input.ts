import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterCreateWithoutPairingInput } from './component-parameter-create-without-pairing.input';

@InputType()
export class ComponentParameterCreateOrConnectWithoutPairingInput {

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:false})
    where!: ComponentParameterWhereUniqueInput;

    @Field(() => ComponentParameterCreateWithoutPairingInput, {nullable:false})
    create!: ComponentParameterCreateWithoutPairingInput;
}
