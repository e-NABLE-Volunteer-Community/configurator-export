import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';

@InputType()
export class AuthorBioWhereInput {

    @Field(() => [AuthorBioWhereInput], {nullable:true})
    AND?: Array<AuthorBioWhereInput>;

    @Field(() => [AuthorBioWhereInput], {nullable:true})
    OR?: Array<AuthorBioWhereInput>;

    @Field(() => [AuthorBioWhereInput], {nullable:true})
    NOT?: Array<AuthorBioWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    locale?: StringFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: AuthorRelationFilter;
}
