import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlUpdateInput } from './author-url-update.input';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';

@ArgsType()
export class UpdateOneAuthorUrlArgs {

    @Field(() => AuthorUrlUpdateInput, {nullable:false})
    data!: AuthorUrlUpdateInput;

    @Field(() => AuthorUrlWhereUniqueInput, {nullable:false})
    where!: AuthorUrlWhereUniqueInput;
}
