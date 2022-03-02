import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';
import { AuthorBioUpdateWithoutAuthorInput } from './author-bio-update-without-author.input';
import { AuthorBioCreateWithoutAuthorInput } from './author-bio-create-without-author.input';

@InputType()
export class AuthorBioUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => AuthorBioWhereUniqueInput, {nullable:false})
    where!: AuthorBioWhereUniqueInput;

    @Field(() => AuthorBioUpdateWithoutAuthorInput, {nullable:false})
    update!: AuthorBioUpdateWithoutAuthorInput;

    @Field(() => AuthorBioCreateWithoutAuthorInput, {nullable:false})
    create!: AuthorBioCreateWithoutAuthorInput;
}
