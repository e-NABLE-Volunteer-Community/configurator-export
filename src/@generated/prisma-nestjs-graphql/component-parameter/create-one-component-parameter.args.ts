import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterCreateInput } from './component-parameter-create.input';

@ArgsType()
export class CreateOneComponentParameterArgs {

    @Field(() => ComponentParameterCreateInput, {nullable:false})
    data!: ComponentParameterCreateInput;
}
