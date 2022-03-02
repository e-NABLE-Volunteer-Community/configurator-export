import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentCreateWithoutParametersInput } from './component-create-without-parameters.input';

@InputType()
export class ComponentCreateOrConnectWithoutParametersInput {

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;

    @Field(() => ComponentCreateWithoutParametersInput, {nullable:false})
    create!: ComponentCreateWithoutParametersInput;
}
