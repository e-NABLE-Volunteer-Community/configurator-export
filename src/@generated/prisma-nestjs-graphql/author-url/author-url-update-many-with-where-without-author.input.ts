import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlScalarWhereInput } from './author-url-scalar-where.input';
import { AuthorUrlUpdateManyMutationInput } from './author-url-update-many-mutation.input';

@InputType()
export class AuthorUrlUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => AuthorUrlScalarWhereInput, {nullable:false})
    where!: AuthorUrlScalarWhereInput;

    @Field(() => AuthorUrlUpdateManyMutationInput, {nullable:false})
    data!: AuthorUrlUpdateManyMutationInput;
}
