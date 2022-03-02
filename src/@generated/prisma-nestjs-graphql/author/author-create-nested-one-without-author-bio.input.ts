import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutAuthorBioInput } from './author-create-without-author-bio.input';
import { AuthorCreateOrConnectWithoutAuthorBioInput } from './author-create-or-connect-without-author-bio.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutAuthorBioInput {

    @Field(() => AuthorCreateWithoutAuthorBioInput, {nullable:true})
    create?: AuthorCreateWithoutAuthorBioInput;

    @Field(() => AuthorCreateOrConnectWithoutAuthorBioInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorBioInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;
}
