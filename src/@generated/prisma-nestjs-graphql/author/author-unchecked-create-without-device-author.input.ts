import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthorBioUncheckedCreateNestedManyWithoutAuthorInput } from '../author-bio/author-bio-unchecked-create-nested-many-without-author.input';
import { AuthorUrlUncheckedCreateNestedManyWithoutAuthorInput } from '../author-url/author-url-unchecked-create-nested-many-without-author.input';

@InputType()
export class AuthorUncheckedCreateWithoutDeviceAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => AuthorBioUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorBio?: AuthorBioUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => AuthorUrlUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorUrl?: AuthorUrlUncheckedCreateNestedManyWithoutAuthorInput;
}
