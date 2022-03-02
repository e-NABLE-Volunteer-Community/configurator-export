import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterUpdateWithoutComponentInput } from './component-parameter-update-without-component.input';

@InputType()
export class ComponentParameterUpdateWithWhereUniqueWithoutComponentInput {

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:false})
    where!: ComponentParameterWhereUniqueInput;

    @Field(() => ComponentParameterUpdateWithoutComponentInput, {nullable:false})
    data!: ComponentParameterUpdateWithoutComponentInput;
}
