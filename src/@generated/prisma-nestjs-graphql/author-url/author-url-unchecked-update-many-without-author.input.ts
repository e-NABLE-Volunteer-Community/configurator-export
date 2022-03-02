import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlCreateWithoutAuthorInput } from './author-url-create-without-author.input';
import { AuthorUrlCreateOrConnectWithoutAuthorInput } from './author-url-create-or-connect-without-author.input';
import { AuthorUrlUpsertWithWhereUniqueWithoutAuthorInput } from './author-url-upsert-with-where-unique-without-author.input';
import { AuthorUrlCreateManyAuthorInputEnvelope } from './author-url-create-many-author-input-envelope.input';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';
import { AuthorUrlUpdateWithWhereUniqueWithoutAuthorInput } from './author-url-update-with-where-unique-without-author.input';
import { AuthorUrlUpdateManyWithWhereWithoutAuthorInput } from './author-url-update-many-with-where-without-author.input';
import { AuthorUrlScalarWhereInput } from './author-url-scalar-where.input';

@InputType()
export class AuthorUrlUncheckedUpdateManyWithoutAuthorInput {

    @Field(() => [AuthorUrlCreateWithoutAuthorInput], {nullable:true})
    create?: Array<AuthorUrlCreateWithoutAuthorInput>;

    @Field(() => [AuthorUrlCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<AuthorUrlCreateOrConnectWithoutAuthorInput>;

    @Field(() => [AuthorUrlUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<AuthorUrlUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => AuthorUrlCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: AuthorUrlCreateManyAuthorInputEnvelope;

    @Field(() => [AuthorUrlWhereUniqueInput], {nullable:true})
    set?: Array<AuthorUrlWhereUniqueInput>;

    @Field(() => [AuthorUrlWhereUniqueInput], {nullable:true})
    disconnect?: Array<AuthorUrlWhereUniqueInput>;

    @Field(() => [AuthorUrlWhereUniqueInput], {nullable:true})
    delete?: Array<AuthorUrlWhereUniqueInput>;

    @Field(() => [AuthorUrlWhereUniqueInput], {nullable:true})
    connect?: Array<AuthorUrlWhereUniqueInput>;

    @Field(() => [AuthorUrlUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<AuthorUrlUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [AuthorUrlUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<AuthorUrlUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [AuthorUrlScalarWhereInput], {nullable:true})
    deleteMany?: Array<AuthorUrlScalarWhereInput>;
}
