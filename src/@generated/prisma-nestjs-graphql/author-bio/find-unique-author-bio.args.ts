import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';

@ArgsType()
export class FindUniqueAuthorBioArgs {

    @Field(() => AuthorBioWhereUniqueInput, {nullable:false})
    where!: AuthorBioWhereUniqueInput;
}
