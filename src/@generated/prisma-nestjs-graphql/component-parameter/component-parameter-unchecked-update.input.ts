import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumComponentParameterKindFieldUpdateOperationsInput } from '../prisma/enum-component-parameter-kind-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ComponentParameterConfigurationDescriptionPairingUncheckedUpdateOneWithoutComponentParameterInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-unchecked-update-one-without-component-parameter.input';

@InputType()
export class ComponentParameterUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    componentId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumComponentParameterKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumComponentParameterKindFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cadName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    humanName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUncheckedUpdateOneWithoutComponentParameterInput, {nullable:true})
    pairing?: ComponentParameterConfigurationDescriptionPairingUncheckedUpdateOneWithoutComponentParameterInput;
}
