import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateWithoutParametersInput } from './component-create-without-parameters.input';
import { ComponentCreateOrConnectWithoutParametersInput } from './component-create-or-connect-without-parameters.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';

@InputType()
export class ComponentCreateNestedOneWithoutParametersInput {

    @Field(() => ComponentCreateWithoutParametersInput, {nullable:true})
    create?: ComponentCreateWithoutParametersInput;

    @Field(() => ComponentCreateOrConnectWithoutParametersInput, {nullable:true})
    connectOrCreate?: ComponentCreateOrConnectWithoutParametersInput;

    @Field(() => ComponentWhereUniqueInput, {nullable:true})
    connect?: ComponentWhereUniqueInput;
}
