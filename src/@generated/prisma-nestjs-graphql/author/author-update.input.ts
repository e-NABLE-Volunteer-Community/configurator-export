import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AuthorBioUpdateManyWithoutAuthorInput } from '../author-bio/author-bio-update-many-without-author.input';
import { AuthorUrlUpdateManyWithoutAuthorInput } from '../author-url/author-url-update-many-without-author.input';
import { DeviceAuthorUpdateManyWithoutAuthorInput } from '../device-author/device-author-update-many-without-author.input';

@InputType()
export class AuthorUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AuthorBioUpdateManyWithoutAuthorInput, {nullable:true})
    authorBio?: AuthorBioUpdateManyWithoutAuthorInput;

    @Field(() => AuthorUrlUpdateManyWithoutAuthorInput, {nullable:true})
    authorUrl?: AuthorUrlUpdateManyWithoutAuthorInput;

    @Field(() => DeviceAuthorUpdateManyWithoutAuthorInput, {nullable:true})
    deviceAuthor?: DeviceAuthorUpdateManyWithoutAuthorInput;
}
