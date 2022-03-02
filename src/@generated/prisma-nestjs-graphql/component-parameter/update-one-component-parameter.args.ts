import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterUpdateInput } from './component-parameter-update.input';
import { ComponentParameterWhereUniqueInput } from './component-parameter-where-unique.input';

@ArgsType()
export class UpdateOneComponentParameterArgs {

    @Field(() => ComponentParameterUpdateInput, {nullable:false})
    data!: ComponentParameterUpdateInput;

    @Field(() => ComponentParameterWhereUniqueInput, {nullable:false})
    where!: ComponentParameterWhereUniqueInput;
}
