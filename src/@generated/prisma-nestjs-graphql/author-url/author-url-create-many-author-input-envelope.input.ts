import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlCreateManyAuthorInput } from './author-url-create-many-author.input';

@InputType()
export class AuthorUrlCreateManyAuthorInputEnvelope {

    @Field(() => [AuthorUrlCreateManyAuthorInput], {nullable:false})
    data!: Array<AuthorUrlCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
