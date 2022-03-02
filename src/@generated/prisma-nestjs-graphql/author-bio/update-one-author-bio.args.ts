import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioUpdateInput } from './author-bio-update.input';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';

@ArgsType()
export class UpdateOneAuthorBioArgs {

    @Field(() => AuthorBioUpdateInput, {nullable:false})
    data!: AuthorBioUpdateInput;

    @Field(() => AuthorBioWhereUniqueInput, {nullable:false})
    where!: AuthorBioWhereUniqueInput;
}
