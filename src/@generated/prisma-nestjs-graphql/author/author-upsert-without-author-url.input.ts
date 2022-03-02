import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutAuthorUrlInput } from './author-update-without-author-url.input';
import { AuthorCreateWithoutAuthorUrlInput } from './author-create-without-author-url.input';

@InputType()
export class AuthorUpsertWithoutAuthorUrlInput {

    @Field(() => AuthorUpdateWithoutAuthorUrlInput, {nullable:false})
    update!: AuthorUpdateWithoutAuthorUrlInput;

    @Field(() => AuthorCreateWithoutAuthorUrlInput, {nullable:false})
    create!: AuthorCreateWithoutAuthorUrlInput;
}
