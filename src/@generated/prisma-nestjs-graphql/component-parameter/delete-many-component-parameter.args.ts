import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterWhereInput } from './component-parameter-where.input';

@ArgsType()
export class DeleteManyComponentParameterArgs {

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    where?: ComponentParameterWhereInput;
}
