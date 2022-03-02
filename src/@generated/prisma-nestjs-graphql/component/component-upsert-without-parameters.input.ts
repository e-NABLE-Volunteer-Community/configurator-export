import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentUpdateWithoutParametersInput } from './component-update-without-parameters.input';
import { ComponentCreateWithoutParametersInput } from './component-create-without-parameters.input';

@InputType()
export class ComponentUpsertWithoutParametersInput {

    @Field(() => ComponentUpdateWithoutParametersInput, {nullable:false})
    update!: ComponentUpdateWithoutParametersInput;

    @Field(() => ComponentCreateWithoutParametersInput, {nullable:false})
    create!: ComponentCreateWithoutParametersInput;
}
