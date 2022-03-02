import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterCreateWithoutComponentInput } from './component-parameter-create-without-component.input';

@InputType()
export class ComponentParameterCreateOrConnectWithoutComponentInput {

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:false})
    where!: ComponentParameterWhereUniqueInput;

    @Field(() => ComponentParameterCreateWithoutComponentInput, {nullable:false})
    create!: ComponentParameterCreateWithoutComponentInput;
}
