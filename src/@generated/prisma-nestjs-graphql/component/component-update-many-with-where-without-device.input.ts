import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentScalarWhereInput } from './component-scalar-where.input';
import { ComponentUpdateManyMutationInput } from './component-update-many-mutation.input';

@InputType()
export class ComponentUpdateManyWithWhereWithoutDeviceInput {

    @Field(() => ComponentScalarWhereInput, {nullable:false})
    where!: ComponentScalarWhereInput;

    @Field(() => ComponentUpdateManyMutationInput, {nullable:false})
    data!: ComponentUpdateManyMutationInput;
}
