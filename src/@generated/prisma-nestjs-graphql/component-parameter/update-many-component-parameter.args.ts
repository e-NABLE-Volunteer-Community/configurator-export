import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterUpdateManyMutationInput } from './component-parameter-update-many-mutation.input';
import { ComponentParameterWhereInput } from './component-parameter-where.input';

@ArgsType()
export class UpdateManyComponentParameterArgs {

    @Field(() => ComponentParameterUpdateManyMutationInput, {nullable:false})
    data!: ComponentParameterUpdateManyMutationInput;

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    where?: ComponentParameterWhereInput;
}
