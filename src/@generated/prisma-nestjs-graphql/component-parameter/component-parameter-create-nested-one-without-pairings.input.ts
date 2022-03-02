import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateWithoutPairingsInput } from './component-parameter-create-without-pairings.input';
import { ComponentParameterCreateOrConnectWithoutPairingsInput } from './component-parameter-create-or-connect-without-pairings.input';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';

@InputType()
export class ComponentParameterCreateNestedOneWithoutPairingsInput {

    @Field(() => ComponentParameterCreateWithoutPairingsInput, {nullable:true})
    create?: ComponentParameterCreateWithoutPairingsInput;

    @Field(() => ComponentParameterCreateOrConnectWithoutPairingsInput, {nullable:true})
    connectOrCreate?: ComponentParameterCreateOrConnectWithoutPairingsInput;

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:true})
    connect?: ComponentParameterWhereUniqueInput;
}
