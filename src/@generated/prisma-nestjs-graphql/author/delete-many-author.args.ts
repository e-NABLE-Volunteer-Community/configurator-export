import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';

@ArgsType()
export class DeleteManyAuthorArgs {

    @Field(() => AuthorWhereInput, {nullable:true})
    where?: AuthorWhereInput;
}
