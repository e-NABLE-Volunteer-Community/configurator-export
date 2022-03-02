import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentCreateInput } from './component-create.input';
import { ComponentUpdateInput } from './component-update.input';

@ArgsType()
export class UpsertOneComponentArgs {

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;

    @Field(() => ComponentCreateInput, {nullable:false})
    create!: ComponentCreateInput;

    @Field(() => ComponentUpdateInput, {nullable:false})
    update!: ComponentUpdateInput;
}
