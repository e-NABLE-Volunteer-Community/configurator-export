import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorBioCreateNestedManyWithoutAuthorInput } from '../author-bio/author-bio-create-nested-many-without-author.input';
import { DeviceAuthorCreateNestedManyWithoutAuthorInput } from '../device-author/device-author-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateWithoutAuthorUrlInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => AuthorBioCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorBio?: AuthorBioCreateNestedManyWithoutAuthorInput;

    @Field(() => DeviceAuthorCreateNestedManyWithoutAuthorInput, {nullable:true})
    deviceAuthor?: DeviceAuthorCreateNestedManyWithoutAuthorInput;
}
