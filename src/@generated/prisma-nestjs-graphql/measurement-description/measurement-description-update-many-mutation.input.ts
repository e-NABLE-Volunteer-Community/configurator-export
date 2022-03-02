import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumMeasurementDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-measurement-description-kind-field-update-operations.input';

@InputType()
export class MeasurementDescriptionUpdateManyMutationInput {

    @Field(() => EnumMeasurementDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumMeasurementDescriptionKindFieldUpdateOperationsInput;
}
