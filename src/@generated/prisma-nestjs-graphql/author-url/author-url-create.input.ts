import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutAuthorUrlInput } from '../author/author-create-nested-one-without-author-url.input';

@InputType()
export class AuthorUrlCreateInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => AuthorCreateNestedOneWithoutAuthorUrlInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutAuthorUrlInput;
}
