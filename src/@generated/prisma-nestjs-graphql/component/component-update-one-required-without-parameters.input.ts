import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateWithoutParametersInput } from './component-create-without-parameters.input';
import { ComponentCreateOrConnectWithoutParametersInput } from './component-create-or-connect-without-parameters.input';
import { ComponentUpsertWithoutParametersInput } from './component-upsert-without-parameters.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentUpdateWithoutParametersInput } from './component-update-without-parameters.input';

@InputType()
export class ComponentUpdateOneRequiredWithoutParametersInput {

    @Field(() => ComponentCreateWithoutParametersInput, {nullable:true})
    create?: ComponentCreateWithoutParametersInput;

    @Field(() => ComponentCreateOrConnectWithoutParametersInput, {nullable:true})
    connectOrCreate?: ComponentCreateOrConnectWithoutParametersInput;

    @Field(() => ComponentUpsertWithoutParametersInput, {nullable:true})
    upsert?: ComponentUpsertWithoutParametersInput;

    @Field(() => ComponentWhereUniqueInput, {nullable:true})
    connect?: ComponentWhereUniqueInput;

    @Field(() => ComponentUpdateWithoutParametersInput, {nullable:true})
    update?: ComponentUpdateWithoutParametersInput;
}
