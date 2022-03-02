import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorCreateWithoutAuthorBioInput } from './author-create-without-author-bio.input';

@InputType()
export class AuthorCreateOrConnectWithoutAuthorBioInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateWithoutAuthorBioInput, {nullable:false})
    create!: AuthorCreateWithoutAuthorBioInput;
}
