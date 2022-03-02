import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthorUrlUncheckedCreateNestedManyWithoutAuthorInput } from '../author-url/author-url-unchecked-create-nested-many-without-author.input';
import { DeviceAuthorUncheckedCreateNestedManyWithoutAuthorInput } from '../device-author/device-author-unchecked-create-nested-many-without-author.input';

@InputType()
export class AuthorUncheckedCreateWithoutAuthorBioInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => AuthorUrlUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorUrl?: AuthorUrlUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => DeviceAuthorUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    deviceAuthor?: DeviceAuthorUncheckedCreateNestedManyWithoutAuthorInput;
}
