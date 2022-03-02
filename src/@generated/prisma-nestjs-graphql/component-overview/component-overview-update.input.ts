import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ComponentUpdateOneRequiredWithoutComponentOverviewsInput } from '../component/component-update-one-required-without-component-overviews.input';

@InputType()
export class ComponentOverviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locale?: StringFieldUpdateOperationsInput;

    @Field(() => ComponentUpdateOneRequiredWithoutComponentOverviewsInput, {nullable:true})
    component?: ComponentUpdateOneRequiredWithoutComponentOverviewsInput;
}
