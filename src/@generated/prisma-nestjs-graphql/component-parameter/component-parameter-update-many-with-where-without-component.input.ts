import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentParameterScalarWhereInput } from './component-parameter-scalar-where.input';
import { ComponentParameterUpdateManyMutationInput } from './component-parameter-update-many-mutation.input';

@InputType()
export class ComponentParameterUpdateManyWithWhereWithoutComponentInput {

    @Field(() => ComponentParameterScalarWhereInput, {nullable:false})
    where!: ComponentParameterScalarWhereInput;

    @Field(() => ComponentParameterUpdateManyMutationInput, {nullable:false})
    data!: ComponentParameterUpdateManyMutationInput;
}
