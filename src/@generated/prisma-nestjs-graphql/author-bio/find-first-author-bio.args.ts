import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorBioWhereInput } from './author-bio-where.input';
import { AuthorBioOrderByWithRelationInput } from './author-bio-order-by-with-relation.input';
import { AuthorBioWhereUniqueInput } from './author-bio-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorBioScalarFieldEnum } from './author-bio-scalar-field.enum';

@ArgsType()
export class FindFirstAuthorBioArgs {

    @Field(() => AuthorBioWhereInput, {nullable:true})
    where?: AuthorBioWhereInput;

    @Field(() => [AuthorBioOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorBioOrderByWithRelationInput>;

    @Field(() => AuthorBioWhereUniqueInput, {nullable:true})
    cursor?: AuthorBioWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AuthorBioScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthorBioScalarFieldEnum>;
}
