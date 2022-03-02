import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioCreateManyAuthorInput } from './author-bio-create-many-author.input';

@InputType()
export class AuthorBioCreateManyAuthorInputEnvelope {

    @Field(() => [AuthorBioCreateManyAuthorInput], {nullable:false})
    data!: Array<AuthorBioCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
