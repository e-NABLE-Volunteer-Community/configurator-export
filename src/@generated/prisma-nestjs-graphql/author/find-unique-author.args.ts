import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@ArgsType()
export class FindUniqueAuthorArgs {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    where!: AuthorWhereUniqueInput;
}
