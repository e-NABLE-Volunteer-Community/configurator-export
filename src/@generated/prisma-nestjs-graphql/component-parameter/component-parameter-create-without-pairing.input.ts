import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterKind } from '../component/component-parameter-kind.enum';
import { ComponentCreateNestedOneWithoutParametersInput } from '../component/component-create-nested-one-without-parameters.input';

@InputType()
export class ComponentParameterCreateWithoutPairingInput {

    @Field(() => ComponentParameterKind, {nullable:false})
    kind!: keyof typeof ComponentParameterKind;

    @Field(() => String, {nullable:false})
    cadName!: string;

    @Field(() => String, {nullable:true})
    humanName?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ComponentCreateNestedOneWithoutParametersInput, {nullable:false})
    component!: ComponentCreateNestedOneWithoutParametersInput;
}
