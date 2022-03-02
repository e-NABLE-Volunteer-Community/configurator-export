import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AuthorUpdateOneRequiredWithoutAuthorUrlInput } from '../author/author-update-one-required-without-author-url.input';

@InputType()
export class AuthorUrlUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => AuthorUpdateOneRequiredWithoutAuthorUrlInput, {nullable:true})
    author?: AuthorUpdateOneRequiredWithoutAuthorUrlInput;
}
