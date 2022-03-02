import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';
import { AuthorBioCreateWithoutAuthorInput } from './author-bio-create-without-author.input';

@InputType()
export class AuthorBioCreateOrConnectWithoutAuthorInput {

    @Field(() => AuthorBioWhereUniqueInput, {nullable:false})
    where!: AuthorBioWhereUniqueInput;

    @Field(() => AuthorBioCreateWithoutAuthorInput, {nullable:false})
    create!: AuthorBioCreateWithoutAuthorInput;
}
