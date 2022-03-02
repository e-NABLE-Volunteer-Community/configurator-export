import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumComponentParameterKindFieldUpdateOperationsInput } from '../prisma/enum-component-parameter-kind-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ComponentParameterUpdateManyMutationInput {

    @Field(() => EnumComponentParameterKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumComponentParameterKindFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cadName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    humanName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;
}
