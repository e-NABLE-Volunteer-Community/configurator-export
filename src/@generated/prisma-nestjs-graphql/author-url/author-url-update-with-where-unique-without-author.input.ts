import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';
import { AuthorUrlUpdateWithoutAuthorInput } from './author-url-update-without-author.input';

@InputType()
export class AuthorUrlUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => AuthorUrlWhereUniqueInput, {nullable:false})
    where!: AuthorUrlWhereUniqueInput;

    @Field(() => AuthorUrlUpdateWithoutAuthorInput, {nullable:false})
    data!: AuthorUrlUpdateWithoutAuthorInput;
}
