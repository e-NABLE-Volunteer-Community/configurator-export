import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterCreateManyInput } from './component-parameter-create-many.input';

@ArgsType()
export class CreateManyComponentParameterArgs {

    @Field(() => [ComponentParameterCreateManyInput], {nullable:false})
    data!: Array<ComponentParameterCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
