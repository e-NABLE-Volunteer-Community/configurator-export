import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioWhereInput } from './author-bio-where.input';

@InputType()
export class AuthorBioListRelationFilter {

    @Field(() => AuthorBioWhereInput, {nullable:true})
    every?: AuthorBioWhereInput;

    @Field(() => AuthorBioWhereInput, {nullable:true})
    some?: AuthorBioWhereInput;

    @Field(() => AuthorBioWhereInput, {nullable:true})
    none?: AuthorBioWhereInput;
}
