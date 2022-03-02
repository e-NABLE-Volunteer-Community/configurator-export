import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioCreateManyInput } from './author-bio-create-many.input';

@ArgsType()
export class CreateManyAuthorBioArgs {

    @Field(() => [AuthorBioCreateManyInput], {nullable:false})
    data!: Array<AuthorBioCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
