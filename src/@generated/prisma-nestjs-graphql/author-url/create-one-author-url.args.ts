import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorUrlCreateInput } from './author-url-create.input';

@ArgsType()
export class CreateOneAuthorUrlArgs {

    @Field(() => AuthorUrlCreateInput, {nullable:false})
    data!: AuthorUrlCreateInput;
}
