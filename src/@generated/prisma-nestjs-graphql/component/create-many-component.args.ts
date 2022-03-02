import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentCreateManyInput } from './component-create-many.input';

@ArgsType()
export class CreateManyComponentArgs {

    @Field(() => [ComponentCreateManyInput], {nullable:false})
    data!: Array<ComponentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
