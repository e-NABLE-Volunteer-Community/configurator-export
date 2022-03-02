import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Author } from '../author/author.model';

@ObjectType()
export class AuthorUrl {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Author, {nullable:false})
    author?: Author;
}
