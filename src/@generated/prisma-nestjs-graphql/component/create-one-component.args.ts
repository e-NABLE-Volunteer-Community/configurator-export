import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentCreateInput } from './component-create.input';

@ArgsType()
export class CreateOneComponentArgs {

    @Field(() => ComponentCreateInput, {nullable:false})
    data!: ComponentCreateInput;
}
