import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumMeasurementDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-measurement-description-kind-field-update-operations.input';
import { MeasurementDescriptionOverviewUncheckedUpdateManyWithoutMeasurementDescriptionInput } from '../measurement-description-overview/measurement-description-overview-unchecked-update-many-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    measurementSetDescriptionId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumMeasurementDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumMeasurementDescriptionKindFieldUpdateOperationsInput;

    @Field(() => MeasurementDescriptionOverviewUncheckedUpdateManyWithoutMeasurementDescriptionInput, {nullable:true})
    overviews?: MeasurementDescriptionOverviewUncheckedUpdateManyWithoutMeasurementDescriptionInput;
}
