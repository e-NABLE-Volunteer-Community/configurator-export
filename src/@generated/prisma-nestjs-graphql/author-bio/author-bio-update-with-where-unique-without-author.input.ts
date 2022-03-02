import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';
import { AuthorBioUpdateWithoutAuthorInput } from './author-bio-update-without-author.input';

@InputType()
export class AuthorBioUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => AuthorBioWhereUniqueInput, {nullable:false})
    where!: AuthorBioWhereUniqueInput;

    @Field(() => AuthorBioUpdateWithoutAuthorInput, {nullable:false})
    data!: AuthorBioUpdateWithoutAuthorInput;
}
