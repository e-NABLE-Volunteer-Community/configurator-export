import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioWhereInput } from './author-bio-where.input';

@ArgsType()
export class DeleteManyAuthorBioArgs {

    @Field(() => AuthorBioWhereInput, {nullable:true})
    where?: AuthorBioWhereInput;
}
