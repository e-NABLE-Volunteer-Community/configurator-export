import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutAuthorUrlInput } from './author-create-without-author-url.input';
import { AuthorCreateOrConnectWithoutAuthorUrlInput } from './author-create-or-connect-without-author-url.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutAuthorUrlInput {

    @Field(() => AuthorCreateWithoutAuthorUrlInput, {nullable:true})
    create?: AuthorCreateWithoutAuthorUrlInput;

    @Field(() => AuthorCreateOrConnectWithoutAuthorUrlInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorUrlInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;
}
