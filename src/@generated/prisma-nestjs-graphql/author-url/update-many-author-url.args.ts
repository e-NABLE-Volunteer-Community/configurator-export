import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlUpdateManyMutationInput } from './author-url-update-many-mutation.input';
import { AuthorUrlWhereInput } from './author-url-where.input';

@ArgsType()
export class UpdateManyAuthorUrlArgs {

    @Field(() => AuthorUrlUpdateManyMutationInput, {nullable:false})
    data!: AuthorUrlUpdateManyMutationInput;

    @Field(() => AuthorUrlWhereInput, {nullable:true})
    where?: AuthorUrlWhereInput;
}
