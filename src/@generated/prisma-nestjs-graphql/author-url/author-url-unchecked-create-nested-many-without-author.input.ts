import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlCreateWithoutAuthorInput } from './author-url-create-without-author.input';
import { AuthorUrlCreateOrConnectWithoutAuthorInput } from './author-url-create-or-connect-without-author.input';
import { AuthorUrlCreateManyAuthorInputEnvelope } from './author-url-create-many-author-input-envelope.input';
import { AuthorUrlWhereUniqueInput } from './author-url-where-unique.input';

@InputType()
export class AuthorUrlUncheckedCreateNestedManyWithoutAuthorInput {

    @Field(() => [AuthorUrlCreateWithoutAuthorInput], {nullable:true})
    create?: Array<AuthorUrlCreateWithoutAuthorInput>;

    @Field(() => [AuthorUrlCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<AuthorUrlCreateOrConnectWithoutAuthorInput>;

    @Field(() => AuthorUrlCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: AuthorUrlCreateManyAuthorInputEnvelope;

    @Field(() => [AuthorUrlWhereUniqueInput], {nullable:true})
    connect?: Array<AuthorUrlWhereUniqueInput>;
}
