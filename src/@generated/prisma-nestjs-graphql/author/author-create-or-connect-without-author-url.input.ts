import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorCreateWithoutAuthorUrlInput } from './author-create-without-author-url.input';

@InputType()
export class AuthorCreateOrConnectWithoutAuthorUrlInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateWithoutAuthorUrlInput, {nullable:false})
    create!: AuthorCreateWithoutAuthorUrlInput;
}
