import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlWhereInput } from './author-url-where.input';

@ArgsType()
export class DeleteManyAuthorUrlArgs {

    @Field(() => AuthorUrlWhereInput, {nullable:true})
    where?: AuthorUrlWhereInput;
}
