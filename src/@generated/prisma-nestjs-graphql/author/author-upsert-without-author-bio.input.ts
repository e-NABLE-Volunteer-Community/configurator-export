import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutAuthorBioInput } from './author-update-without-author-bio.input';
import { AuthorCreateWithoutAuthorBioInput } from './author-create-without-author-bio.input';

@InputType()
export class AuthorUpsertWithoutAuthorBioInput {

    @Field(() => AuthorUpdateWithoutAuthorBioInput, {nullable:false})
    update!: AuthorUpdateWithoutAuthorBioInput;

    @Field(() => AuthorCreateWithoutAuthorBioInput, {nullable:false})
    create!: AuthorCreateWithoutAuthorBioInput;
}
