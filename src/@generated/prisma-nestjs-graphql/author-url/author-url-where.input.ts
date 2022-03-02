import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';

@InputType()
export class AuthorUrlWhereInput {

    @Field(() => [AuthorUrlWhereInput], {nullable:true})
    AND?: Array<AuthorUrlWhereInput>;

    @Field(() => [AuthorUrlWhereInput], {nullable:true})
    OR?: Array<AuthorUrlWhereInput>;

    @Field(() => [AuthorUrlWhereInput], {nullable:true})
    NOT?: Array<AuthorUrlWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: AuthorRelationFilter;
}
