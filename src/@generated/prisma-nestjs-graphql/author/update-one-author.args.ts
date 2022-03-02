import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUpdateInput } from './author-update.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@ArgsType()
export class UpdateOneAuthorArgs {

    @Field(() => AuthorUpdateInput, {nullable:false})
    data!: AuthorUpdateInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;
}
