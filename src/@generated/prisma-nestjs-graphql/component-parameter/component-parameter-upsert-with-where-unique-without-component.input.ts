import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterUpdateWithoutComponentInput } from './component-parameter-update-without-component.input';
import { ComponentParameterCreateWithoutComponentInput } from './component-parameter-create-without-component.input';

@InputType()
export class ComponentParameterUpsertWithWhereUniqueWithoutComponentInput {

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:false})
    where!: ComponentParameterWhereUniqueInput;

    @Field(() => ComponentParameterUpdateWithoutComponentInput, {nullable:false})
    update!: ComponentParameterUpdateWithoutComponentInput;

    @Field(() => ComponentParameterCreateWithoutComponentInput, {nullable:false})
    create!: ComponentParameterCreateWithoutComponentInput;
}
