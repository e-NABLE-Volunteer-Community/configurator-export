import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentUpdateInput } from './component-update.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';

@ArgsType()
export class UpdateOneComponentArgs {

    @Field(() => ComponentUpdateInput, {nullable:false})
    data!: ComponentUpdateInput;

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;
}
