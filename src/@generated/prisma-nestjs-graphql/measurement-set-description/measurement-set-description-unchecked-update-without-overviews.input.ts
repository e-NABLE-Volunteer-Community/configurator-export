import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { MeasurementDescriptionUncheckedUpdateManyWithoutMeasurementSetDescriptionInput } from '../measurement-description/measurement-description-unchecked-update-many-without-measurement-set-description.input';
import { DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-unchecked-update-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionUncheckedUpdateWithoutOverviewsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => MeasurementDescriptionUncheckedUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    measurements?: MeasurementDescriptionUncheckedUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput;
}
