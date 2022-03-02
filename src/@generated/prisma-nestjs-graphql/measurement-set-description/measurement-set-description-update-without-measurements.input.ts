import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewUpdateManyWithoutMeasurementSetDescriptionInput } from '../measurement-set-description-overview/measurement-set-description-overview-update-many-without-measurement-set-description.input';
import { DeviceUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-update-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionUpdateWithoutMeasurementsInput {

    @Field(() => MeasurementSetDescriptionOverviewUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceUpdateManyWithoutMeasurementSetDescriptionInput;
}
