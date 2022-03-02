import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutAuthorUrlInput } from './author-create-without-author-url.input';
import { AuthorCreateOrConnectWithoutAuthorUrlInput } from './author-create-or-connect-without-author-url.input';
import { AuthorUpsertWithoutAuthorUrlInput } from './author-upsert-without-author-url.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateWithoutAuthorUrlInput } from './author-update-without-author-url.input';

@InputType()
export class AuthorUpdateOneRequiredWithoutAuthorUrlInput {

    @Field(() => AuthorCreateWithoutAuthorUrlInput, {nullable:true})
    create?: AuthorCreateWithoutAuthorUrlInput;

    @Field(() => AuthorCreateOrConnectWithoutAuthorUrlInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorUrlInput;

    @Field(() => AuthorUpsertWithoutAuthorUrlInput, {nullable:true})
    upsert?: AuthorUpsertWithoutAuthorUrlInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;

    @Field(() => AuthorUpdateWithoutAuthorUrlInput, {nullable:true})
    update?: AuthorUpdateWithoutAuthorUrlInput;
}
