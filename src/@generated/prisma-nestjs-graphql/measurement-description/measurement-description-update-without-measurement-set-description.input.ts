import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumMeasurementDescriptionKindFieldUpdateOperationsInput } from '../prisma/enum-measurement-description-kind-field-update-operations.input';
import { MeasurementDescriptionOverviewUpdateManyWithoutMeasurementDescriptionInput } from '../measurement-description-overview/measurement-description-overview-update-many-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionUpdateWithoutMeasurementSetDescriptionInput {

    @Field(() => EnumMeasurementDescriptionKindFieldUpdateOperationsInput, {nullable:true})
    kind?: EnumMeasurementDescriptionKindFieldUpdateOperationsInput;

    @Field(() => MeasurementDescriptionOverviewUpdateManyWithoutMeasurementDescriptionInput, {nullable:true})
    overviews?: MeasurementDescriptionOverviewUpdateManyWithoutMeasurementDescriptionInput;
}
