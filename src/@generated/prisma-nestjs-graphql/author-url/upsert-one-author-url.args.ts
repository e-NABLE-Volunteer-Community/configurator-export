import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';
import { AuthorUrlCreateInput } from './author-url-create.input';
import { AuthorUrlUpdateInput } from './author-url-update.input';

@ArgsType()
export class UpsertOneAuthorUrlArgs {

    @Field(() => AuthorUrlWhereUniqueInput, {nullable:false})
    where!: AuthorUrlWhereUniqueInput;

    @Field(() => AuthorUrlCreateInput, {nullable:false})
    create!: AuthorUrlCreateInput;

    @Field(() => AuthorUrlUpdateInput, {nullable:false})
    update!: AuthorUrlUpdateInput;
}
