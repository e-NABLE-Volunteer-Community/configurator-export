import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioCreateWithoutAuthorInput } from './author-bio-create-without-author.input';
import { AuthorBioCreateOrConnectWithoutAuthorInput } from './author-bio-create-or-connect-without-author.input';
import { AuthorBioCreateManyAuthorInputEnvelope } from './author-bio-create-many-author-input-envelope.input';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';

@InputType()
export class AuthorBioCreateNestedManyWithoutAuthorInput {

    @Field(() => [AuthorBioCreateWithoutAuthorInput], {nullable:true})
    create?: Array<AuthorBioCreateWithoutAuthorInput>;

    @Field(() => [AuthorBioCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<AuthorBioCreateOrConnectWithoutAuthorInput>;

    @Field(() => AuthorBioCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: AuthorBioCreateManyAuthorInputEnvelope;

    @Field(() => [AuthorBioWhereUniqueInput], {nullable:true})
    connect?: Array<AuthorBioWhereUniqueInput>;
}
