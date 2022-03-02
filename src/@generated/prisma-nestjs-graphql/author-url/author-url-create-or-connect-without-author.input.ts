import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';
import { AuthorUrlCreateWithoutAuthorInput } from './author-url-create-without-author.input';

@InputType()
export class AuthorUrlCreateOrConnectWithoutAuthorInput {

    @Field(() => AuthorUrlWhereUniqueInput, {nullable:false})
    where!: AuthorUrlWhereUniqueInput;

    @Field(() => AuthorUrlCreateWithoutAuthorInput, {nullable:false})
    create!: AuthorUrlCreateWithoutAuthorInput;
}
