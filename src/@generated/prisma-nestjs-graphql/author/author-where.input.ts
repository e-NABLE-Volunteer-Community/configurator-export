import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AuthorBioListRelationFilter } from '../author-bio/author-bio-list-relation-filter.input';
import { AuthorUrlListRelationFilter } from '../author-url/author-url-list-relation-filter.input';
import { DeviceAuthorListRelationFilter } from '../device-author/device-author-list-relation-filter.input';

@InputType()
export class AuthorWhereInput {

    @Field(() => [AuthorWhereInput], {nullable:true})
    AND?: Array<AuthorWhereInput>;

    @Field(() => [AuthorWhereInput], {nullable:true})
    OR?: Array<AuthorWhereInput>;

    @Field(() => [AuthorWhereInput], {nullable:true})
    NOT?: Array<AuthorWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => AuthorBioListRelationFilter, {nullable:true})
    authorBio?: AuthorBioListRelationFilter;

    @Field(() => AuthorUrlListRelationFilter, {nullable:true})
    authorUrl?: AuthorUrlListRelationFilter;

    @Field(() => DeviceAuthorListRelationFilter, {nullable:true})
    deviceAuthor?: DeviceAuthorListRelationFilter;
}
