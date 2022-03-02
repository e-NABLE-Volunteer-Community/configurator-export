import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateWithoutPairingInput } from './component-parameter-create-without-pairing.input';
import { ComponentParameterCreateOrConnectWithoutPairingInput } from './component-parameter-create-or-connect-without-pairing.input';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';

@InputType()
export class ComponentParameterCreateNestedOneWithoutPairingInput {

    @Field(() => ComponentParameterCreateWithoutPairingInput, {nullable:true})
    create?: ComponentParameterCreateWithoutPairingInput;

    @Field(() => ComponentParameterCreateOrConnectWithoutPairingInput, {nullable:true})
    connectOrCreate?: ComponentParameterCreateOrConnectWithoutPairingInput;

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:true})
    connect?: ComponentParameterWhereUniqueInput;
}
