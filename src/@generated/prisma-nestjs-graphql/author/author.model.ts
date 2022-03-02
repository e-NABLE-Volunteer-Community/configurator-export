import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AuthorBio } from '../author-bio/author-bio.model';
import { AuthorUrl } from '../author-url/author-url.model';
import { DeviceAuthor } from '../device-author/device-author.model';
import { AuthorCount } from './author-count.output';

@ObjectType()
export class Author {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => [AuthorBio], {nullable:true})
    authorBio?: Array<AuthorBio>;

    @Field(() => [AuthorUrl], {nullable:true})
    authorUrl?: Array<AuthorUrl>;

    @Field(() => [DeviceAuthor], {nullable:true})
    deviceAuthor?: Array<DeviceAuthor>;

    @Field(() => AuthorCount, {nullable:false})
    _count?: AuthorCount;
}
