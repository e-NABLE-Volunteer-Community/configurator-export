import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorCreateInput } from './author-create.input';
import { AuthorUpdateInput } from './author-update.input';

@ArgsType()
export class UpsertOneAuthorArgs {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateInput, {nullable:false})
    create!: AuthorCreateInput;

    @Field(() => AuthorUpdateInput, {nullable:false})
    update!: AuthorUpdateInput;
}
