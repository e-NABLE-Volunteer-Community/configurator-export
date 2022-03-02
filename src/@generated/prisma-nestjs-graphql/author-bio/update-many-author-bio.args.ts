import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioUpdateManyMutationInput } from './author-bio-update-many-mutation.input';
import { AuthorBioWhereInput } from './author-bio-where.input';

@ArgsType()
export class UpdateManyAuthorBioArgs {

    @Field(() => AuthorBioUpdateManyMutationInput, {nullable:false})
    data!: AuthorBioUpdateManyMutationInput;

    @Field(() => AuthorBioWhereInput, {nullable:true})
    where?: AuthorBioWhereInput;
}
