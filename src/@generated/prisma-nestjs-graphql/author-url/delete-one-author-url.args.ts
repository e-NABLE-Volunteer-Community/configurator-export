import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';

@ArgsType()
export class DeleteOneAuthorUrlArgs {

    @Field(() => AuthorUrlWhereUniqueInput, {nullable:false})
    where!: AuthorUrlWhereUniqueInput;
}
