import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterCreateWithoutPairingsInput } from './component-parameter-create-without-pairings.input';
import { ComponentParameterCreateOrConnectWithoutPairingsInput } from './component-parameter-create-or-connect-without-pairings.input';
import { ComponentParameterUpsertWithoutPairingsInput } from './component-parameter-upsert-without-pairings.input';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterUpdateWithoutPairingsInput } from './component-parameter-update-without-pairings.input';

@InputType()
export class ComponentParameterUpdateOneRequiredWithoutPairingsInput {

    @Field(() => ComponentParameterCreateWithoutPairingsInput, {nullable:true})
    create?: ComponentParameterCreateWithoutPairingsInput;

    @Field(() => ComponentParameterCreateOrConnectWithoutPairingsInput, {nullable:true})
    connectOrCreate?: ComponentParameterCreateOrConnectWithoutPairingsInput;

    @Field(() => ComponentParameterUpsertWithoutPairingsInput, {nullable:true})
    upsert?: ComponentParameterUpsertWithoutPairingsInput;

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:true})
    connect?: ComponentParameterWhereUniqueInput;

    @Field(() => ComponentParameterUpdateWithoutPairingsInput, {nullable:true})
    update?: ComponentParameterUpdateWithoutPairingsInput;
}
