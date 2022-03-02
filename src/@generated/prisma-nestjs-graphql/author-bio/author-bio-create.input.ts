import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutAuthorBioInput } from '../author/author-create-nested-one-without-author-bio.input';

@InputType()
export class AuthorBioCreateInput {

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => AuthorCreateNestedOneWithoutAuthorBioInput, {nullable:false})
    author!: AuthorCreateNestedOneWithoutAuthorBioInput;
}
