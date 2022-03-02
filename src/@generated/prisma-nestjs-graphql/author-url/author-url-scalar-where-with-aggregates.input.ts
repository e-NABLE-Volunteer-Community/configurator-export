import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AuthorUrlScalarWhereWithAggregatesInput {

    @Field(() => [AuthorUrlScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthorUrlScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorUrlScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthorUrlScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorUrlScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthorUrlScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    authorId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;
}
