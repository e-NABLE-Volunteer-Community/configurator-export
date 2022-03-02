import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioCreateWithoutAuthorInput } from './author-bio-create-without-author.input';
import { AuthorBioCreateOrConnectWithoutAuthorInput } from './author-bio-create-or-connect-without-author.input';
import { AuthorBioUpsertWithWhereUniqueWithoutAuthorInput } from './author-bio-upsert-with-where-unique-without-author.input';
import { AuthorBioCreateManyAuthorInputEnvelope } from './author-bio-create-many-author-input-envelope.input';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';
import { AuthorBioUpdateWithWhereUniqueWithoutAuthorInput } from './author-bio-update-with-where-unique-without-author.input';
import { AuthorBioUpdateManyWithWhereWithoutAuthorInput } from './author-bio-update-many-with-where-without-author.input';
import { AuthorBioScalarWhereInput } from './author-bio-scalar-where.input';

@InputType()
export class AuthorBioUpdateManyWithoutAuthorInput {

    @Field(() => [AuthorBioCreateWithoutAuthorInput], {nullable:true})
    create?: Array<AuthorBioCreateWithoutAuthorInput>;

    @Field(() => [AuthorBioCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<AuthorBioCreateOrConnectWithoutAuthorInput>;

    @Field(() => [AuthorBioUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<AuthorBioUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => AuthorBioCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: AuthorBioCreateManyAuthorInputEnvelope;

    @Field(() => [AuthorBioWhereUniqueInput], {nullable:true})
    set?: Array<AuthorBioWhereUniqueInput>;

    @Field(() => [AuthorBioWhereUniqueInput], {nullable:true})
    disconnect?: Array<AuthorBioWhereUniqueInput>;

    @Field(() => [AuthorBioWhereUniqueInput], {nullable:true})
    delete?: Array<AuthorBioWhereUniqueInput>;

    @Field(() => [AuthorBioWhereUniqueInput], {nullable:true})
    connect?: Array<AuthorBioWhereUniqueInput>;

    @Field(() => [AuthorBioUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<AuthorBioUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [AuthorBioUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<AuthorBioUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [AuthorBioScalarWhereInput], {nullable:true})
    deleteMany?: Array<AuthorBioScalarWhereInput>;
}
