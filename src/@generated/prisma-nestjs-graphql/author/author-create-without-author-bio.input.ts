import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUrlCreateNestedManyWithoutAuthorInput } from '../author-url/author-url-create-nested-many-without-author.input';
import { DeviceAuthorCreateNestedManyWithoutAuthorInput } from '../device-author/device-author-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateWithoutAuthorBioInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => AuthorUrlCreateNestedManyWithoutAuthorInput, {nullable:true})
    authorUrl?: AuthorUrlCreateNestedManyWithoutAuthorInput;

    @Field(() => DeviceAuthorCreateNestedManyWithoutAuthorInput, {nullable:true})
    deviceAuthor?: DeviceAuthorCreateNestedManyWithoutAuthorInput;
}
