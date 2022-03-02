import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateWithoutPairingInput } from './component-parameter-create-without-pairing.input';
import { ComponentParameterCreateOrConnectWithoutPairingInput } from './component-parameter-create-or-connect-without-pairing.input';
import { ComponentParameterUpsertWithoutPairingInput } from './component-parameter-upsert-without-pairing.input';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterUpdateWithoutPairingInput } from './component-parameter-update-without-pairing.input';

@InputType()
export class ComponentParameterUpdateOneRequiredWithoutPairingInput {

    @Field(() => ComponentParameterCreateWithoutPairingInput, {nullable:true})
    create?: ComponentParameterCreateWithoutPairingInput;

    @Field(() => ComponentParameterCreateOrConnectWithoutPairingInput, {nullable:true})
    connectOrCreate?: ComponentParameterCreateOrConnectWithoutPairingInput;

    @Field(() => ComponentParameterUpsertWithoutPairingInput, {nullable:true})
    upsert?: ComponentParameterUpsertWithoutPairingInput;

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:true})
    connect?: ComponentParameterWhereUniqueInput;

    @Field(() => ComponentParameterUpdateWithoutPairingInput, {nullable:true})
    update?: ComponentParameterUpdateWithoutPairingInput;
}
