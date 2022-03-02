import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentUpdateManyMutationInput } from './component-update-many-mutation.input';
import { ComponentWhereInput } from './component-where.input';

@ArgsType()
export class UpdateManyComponentArgs {

    @Field(() => ComponentUpdateManyMutationInput, {nullable:false})
    data!: ComponentUpdateManyMutationInput;

    @Field(() => ComponentWhereInput, {nullable:true})
    where?: ComponentWhereInput;
}
