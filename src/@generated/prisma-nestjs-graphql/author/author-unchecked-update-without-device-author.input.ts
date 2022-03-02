import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AuthorBioUncheckedUpdateManyWithoutAuthorInput } from '../author-bio/author-bio-unchecked-update-many-without-author.input';
import { AuthorUrlUncheckedUpdateManyWithoutAuthorInput } from '../author-url/author-url-unchecked-update-many-without-author.input';

@InputType()
export class AuthorUncheckedUpdateWithoutDeviceAuthorInput {

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

    @Field(() => AuthorUrlUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    authorUrl?: AuthorUrlUncheckedUpdateManyWithoutAuthorInput;
}
