import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';
import { AuthorBioCreateInput } from './author-bio-create.input';
import { AuthorBioUpdateInput } from './author-bio-update.input';

@ArgsType()
export class UpsertOneAuthorBioArgs {

    @Field(() => AuthorBioWhereUniqueInput, {nullable:false})
    where!: AuthorBioWhereUniqueInput;

    @Field(() => AuthorBioCreateInput, {nullable:false})
    create!: AuthorBioCreateInput;

    @Field(() => AuthorBioUpdateInput, {nullable:false})
    update!: AuthorBioUpdateInput;
}
