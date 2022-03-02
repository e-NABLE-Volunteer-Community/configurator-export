import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AuthorBioUncheckedUpdateManyWithoutAuthorInput } from '../author-bio/author-bio-unchecked-update-many-without-author.input';
import { DeviceAuthorUncheckedUpdateManyWithoutAuthorInput } from '../device-author/device-author-unchecked-update-many-without-author.input';

@InputType()
export class AuthorUncheckedUpdateWithoutAuthorUrlInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AuthorBioUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    authorBio?: AuthorBioUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => DeviceAuthorUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    deviceAuthor?: DeviceAuthorUncheckedUpdateManyWithoutAuthorInput;
}
