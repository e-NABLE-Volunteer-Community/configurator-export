import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AuthorBioScalarWhereInput {

    @Field(() => [AuthorBioScalarWhereInput], {nullable:true})
    AND?: Array<AuthorBioScalarWhereInput>;

    @Field(() => [AuthorBioScalarWhereInput], {nullable:true})
    OR?: Array<AuthorBioScalarWhereInput>;

    @Field(() => [AuthorBioScalarWhereInput], {nullable:true})
    NOT?: Array<AuthorBioScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    locale?: StringFilter;
}
