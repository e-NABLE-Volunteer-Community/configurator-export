import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AuthorUrlScalarWhereInput {

    @Field(() => [AuthorUrlScalarWhereInput], {nullable:true})
    AND?: Array<AuthorUrlScalarWhereInput>;

    @Field(() => [AuthorUrlScalarWhereInput], {nullable:true})
    OR?: Array<AuthorUrlScalarWhereInput>;

    @Field(() => [AuthorUrlScalarWhereInput], {nullable:true})
    NOT?: Array<AuthorUrlScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;
}
