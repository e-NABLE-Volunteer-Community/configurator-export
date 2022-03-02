import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlCreateManyInput } from './author-url-create-many.input';

@ArgsType()
export class CreateManyAuthorUrlArgs {

    @Field(() => [AuthorUrlCreateManyInput], {nullable:false})
    data!: Array<AuthorUrlCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
