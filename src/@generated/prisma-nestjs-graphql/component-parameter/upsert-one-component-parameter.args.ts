import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';
import { ComponentParameterCreateInput } from './component-parameter-create.input';
import { ComponentParameterUpdateInput } from './component-parameter-update.input';

@ArgsType()
export class UpsertOneComponentParameterArgs {

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:false})
    where!: ComponentParameterWhereUniqueInput;

    @Field(() => ComponentParameterCreateInput, {nullable:false})
    create!: ComponentParameterCreateInput;

    @Field(() => ComponentParameterUpdateInput, {nullable:false})
    update!: ComponentParameterUpdateInput;
}
