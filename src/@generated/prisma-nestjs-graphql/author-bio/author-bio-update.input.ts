import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AuthorUpdateOneRequiredWithoutAuthorBioInput } from '../author/author-update-one-required-without-author-bio.input';

@InputType()
export class AuthorBioUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locale?: StringFieldUpdateOperationsInput;

    @Field(() => AuthorUpdateOneRequiredWithoutAuthorBioInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutAuthorBioInput;
}
