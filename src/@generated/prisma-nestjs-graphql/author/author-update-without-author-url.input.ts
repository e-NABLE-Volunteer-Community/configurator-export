import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AuthorBioUpdateManyWithoutAuthorInput } from '../author-bio/author-bio-update-many-without-author.input';
import { DeviceAuthorUpdateManyWithoutAuthorInput } from '../device-author/device-author-update-many-without-author.input';

@InputType()
export class AuthorUpdateWithoutAuthorUrlInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AuthorBioUpdateManyWithoutAuthorInput, {nullable:true})
    authorBio?: AuthorBioUpdateManyWithoutAuthorInput;

    @Field(() => DeviceAuthorUpdateManyWithoutAuthorInput, {nullable:true})
    deviceAuthor?: DeviceAuthorUpdateManyWithoutAuthorInput;
}
