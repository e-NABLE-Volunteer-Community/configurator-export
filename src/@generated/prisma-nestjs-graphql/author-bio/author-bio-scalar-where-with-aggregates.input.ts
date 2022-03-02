import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AuthorBioScalarWhereWithAggregatesInput {

    @Field(() => [AuthorBioScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthorBioScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorBioScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthorBioScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorBioScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthorBioScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    authorId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bio?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locale?: StringWithAggregatesFilter;
}
