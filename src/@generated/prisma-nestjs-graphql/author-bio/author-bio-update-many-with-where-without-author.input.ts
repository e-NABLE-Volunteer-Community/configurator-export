import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioScalarWhereInput } from './author-bio-scalar-where.input';
import { AuthorBioUpdateManyMutationInput } from './author-bio-update-many-mutation.input';

@InputType()
export class AuthorBioUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => AuthorBioScalarWhereInput, {nullable:false})
    where!: AuthorBioScalarWhereInput;

    @Field(() => AuthorBioUpdateManyMutationInput, {nullable:false})
    data!: AuthorBioUpdateManyMutationInput;
}
