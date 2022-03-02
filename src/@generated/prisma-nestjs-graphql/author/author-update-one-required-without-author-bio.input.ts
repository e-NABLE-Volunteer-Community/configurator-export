import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutAuthorBioInput } from './author-create-without-author-bio.input';
import { AuthorCreateOrConnectWithoutAuthorBioInput } from './author-create-or-connect-without-author-bio.input';
import { AuthorUpsertWithoutAuthorBioInput } from './author-upsert-without-author-bio.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateWithoutAuthorBioInput } from './author-update-without-author-bio.input';

@InputType()
export class AuthorUpdateOneRequiredWithoutAuthorBioInput {

    @Field(() => AuthorCreateWithoutAuthorBioInput, {nullable:true})
    create?: AuthorCreateWithoutAuthorBioInput;

    @Field(() => AuthorCreateOrConnectWithoutAuthorBioInput, {nullable:true})
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorBioInput;

    @Field(() => AuthorUpsertWithoutAuthorBioInput, {nullable:true})
    upsert?: AuthorUpsertWithoutAuthorBioInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    connect?: AuthorWhereUniqueInput;

    @Field(() => AuthorUpdateWithoutAuthorBioInput, {nullable:true})
    update?: AuthorUpdateWithoutAuthorBioInput;
}
