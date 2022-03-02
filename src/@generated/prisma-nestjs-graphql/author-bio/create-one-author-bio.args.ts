import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioCreateInput } from './author-bio-create.input';

@ArgsType()
export class CreateOneAuthorBioArgs {

    @Field(() => AuthorBioCreateInput, {nullable:false})
    data!: AuthorBioCreateInput;
}
