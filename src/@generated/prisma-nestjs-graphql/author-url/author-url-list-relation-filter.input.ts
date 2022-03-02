import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlWhereInput } from './author-url-where.input';

@InputType()
export class AuthorUrlListRelationFilter {

    @Field(() => AuthorUrlWhereInput, {nullable:true})
    every?: AuthorUrlWhereInput;

    @Field(() => AuthorUrlWhereInput, {nullable:true})
    some?: AuthorUrlWhereInput;

    @Field(() => AuthorUrlWhereInput, {nullable:true})
    none?: AuthorUrlWhereInput;
}
