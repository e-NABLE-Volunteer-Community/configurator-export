import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumMeasurementDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-measurement-description-kind-field-update-operations.input';

@InputType()
export class MeasurementDescriptionUncheckedUpdateManyInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    measurementSetDescriptionId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumMeasurementDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumMeasurementDescriptionKindFieldUpdateOperationsInput;
}
