import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';
import { AuthorUrlUpdateWithoutAuthorInput } from './author-url-update-without-author.input';
import { AuthorUrlCreateWithoutAuthorInput } from './author-url-create-without-author.input';

@InputType()
export class AuthorUrlUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => AuthorUrlWhereUniqueInput, {nullable:false})
    where!: AuthorUrlWhereUniqueInput;

    @Field(() => AuthorUrlUpdateWithoutAuthorInput, {nullable:false})
    update!: AuthorUrlUpdateWithoutAuthorInput;

    @Field(() => AuthorUrlCreateWithoutAuthorInput, {nullable:false})
    create!: AuthorUrlCreateWithoutAuthorInput;
}
