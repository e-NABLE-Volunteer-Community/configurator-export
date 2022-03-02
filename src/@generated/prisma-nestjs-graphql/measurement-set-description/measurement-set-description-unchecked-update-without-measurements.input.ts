import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MeasurementSetDescriptionOverviewUncheckedUpdateManyWithoutMeasurementSetDescriptionInput } from '../measurement-set-description-overview/measurement-set-description-overview-unchecked-update-many-without-measurement-set-description.input';
import { DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-unchecked-update-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionUncheckedUpdateWithoutMeasurementsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => MeasurementSetDescriptionOverviewUncheckedUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewUncheckedUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput;
}
