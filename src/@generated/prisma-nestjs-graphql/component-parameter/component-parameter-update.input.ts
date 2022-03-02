import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumComponentParameterKindFieldUpdateOperationsInput } from '../prisma/enum-component-parameter-kind-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ComponentUpdateOneRequiredWithoutParametersInput } from '../component/component-update-one-required-without-parameters.input';
import { ComponentParameterConfigurationDescriptionPairingUpdateOneWithoutComponentParameterInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-update-one-without-component-parameter.input';

@InputType()
export class ComponentParameterUpdateInput {

    @Field(() => EnumComponentParameterKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumComponentParameterKindFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cadName?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    humanName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ComponentUpdateOneRequiredWithoutParametersInput, {nullable:true})
    component?: ComponentUpdateOneRequiredWithoutParametersInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingUpdateOneWithoutComponentParameterInput, {nullable:true})
    pairing?: ComponentParameterConfigurationDescriptionPairingUpdateOneWithoutComponentParameterInput;
}
