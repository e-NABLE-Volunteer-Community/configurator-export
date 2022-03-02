import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentWhereInput } from './component-where.input';

@ArgsType()
export class DeleteManyComponentArgs {

    @Field(() => ComponentWhereInput, {nullable:true})
    where?: ComponentWhereInput;
}
