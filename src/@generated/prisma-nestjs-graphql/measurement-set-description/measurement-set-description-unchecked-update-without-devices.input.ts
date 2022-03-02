import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MeasurementSetDescriptionOverviewUncheckedUpdateManyWithoutMeasurementSetDescriptionInput } from '../measurement-set-description-overview/measurement-set-description-overview-unchecked-update-many-without-measurement-set-description.input';
import { MeasurementDescriptionUncheckedUpdateManyWithoutMeasurementSetDescriptionInput } from '../measurement-description/measurement-description-unchecked-update-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionUncheckedUpdateWithoutDevicesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => MeasurementSetDescriptionOverviewUncheckedUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewUncheckedUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => MeasurementDescriptionUncheckedUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    measurements?: MeasurementDescriptionUncheckedUpdateManyWithoutMeasurementSetDescriptionInput;
}
