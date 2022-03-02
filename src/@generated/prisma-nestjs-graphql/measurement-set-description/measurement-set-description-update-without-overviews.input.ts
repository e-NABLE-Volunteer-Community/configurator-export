import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionUpdateManyWithoutMeasurementSetDescriptionInput } from '../measurement-description/measurement-description-update-many-without-measurement-set-description.input';
import { DeviceUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-update-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionUpdateWithoutOverviewsInput {

    @Field(() => MeasurementDescriptionUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    measurements?: MeasurementDescriptionUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceUpdateManyWithoutMeasurementSetDescriptionInput;
}
