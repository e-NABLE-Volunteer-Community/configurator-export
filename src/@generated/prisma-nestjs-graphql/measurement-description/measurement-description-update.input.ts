import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumMeasurementDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-measurement-description-kind-field-update-operations.input';
import { MeasurementSetDescriptionUpdateOneRequiredWithoutMeasurementsInput } from '../measurement-set-description/measurement-set-description-update-one-required-without-measurements.input';
import { MeasurementDescriptionOverviewUpdateManyWithoutMeasurementDescriptionInput } from '../measurement-description-overview/measurement-description-overview-update-many-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionUpdateInput {

    @Field(() => EnumMeasurementDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumMeasurementDescriptionKindFieldUpdateOperationsInput;

    @Field(() => MeasurementSetDescriptionUpdateOneRequiredWithoutMeasurementsInput, {nullable:true})
    measurementSetDescription?: MeasurementSetDescriptionUpdateOneRequiredWithoutMeasurementsInput;

    @Field(() => MeasurementDescriptionOverviewUpdateManyWithoutMeasurementDescriptionInput, {nullable:true})
    overviews?: MeasurementDescriptionOverviewUpdateManyWithoutMeasurementDescriptionInput;
}
