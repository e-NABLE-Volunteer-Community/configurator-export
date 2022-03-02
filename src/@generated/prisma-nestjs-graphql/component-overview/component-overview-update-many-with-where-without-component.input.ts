import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentOverviewScalarWhereInput } from './component-overview-scalar-where.input';
import { ComponentOverviewUpdateManyMutationInput } from './component-overview-update-many-mutation.input';

@InputType()
export class ComponentOverviewUpdateManyWithWhereWithoutComponentInput {

    @Field(() => ComponentOverviewScalarWhereInput, {nullable:false})
    where!: ComponentOverviewScalarWhereInput;

    @Field(() => ComponentOverviewUpdateManyMutationInput, {nullable:false})
    data!: ComponentOverviewUpdateManyMutationInput;
}
