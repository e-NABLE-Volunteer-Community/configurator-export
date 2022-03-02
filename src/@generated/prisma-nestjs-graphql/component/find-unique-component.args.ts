import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentWhereUniqueInput } from './component-where-unique.input';

@ArgsType()
export class FindUniqueComponentArgs {

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;
}
