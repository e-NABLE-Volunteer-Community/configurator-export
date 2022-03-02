import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUpdateManyMutationInput } from './author-update-many-mutation.input';
import { AuthorWhereInput } from './author-where.input';

@ArgsType()
export class UpdateManyAuthorArgs {

    @Field(() => AuthorUpdateManyMutationInput, {nullable:false})
    data!: AuthorUpdateManyMutationInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    where?: AuthorWhereInput;
}
