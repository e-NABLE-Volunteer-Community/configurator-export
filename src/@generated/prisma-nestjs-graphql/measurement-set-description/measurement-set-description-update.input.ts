import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewUpdateManyWithoutMeasurementSetDescriptionInput } from '../measurement-set-description-overview/measurement-set-description-overview-update-many-without-measurement-set-description.input';
import { MeasurementDescriptionUpdateManyWithoutMeasurementSetDescriptionInput } from '../measurement-description/measurement-description-update-many-without-measurement-set-description.input';
import { DeviceUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-update-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionUpdateInput {

    @Field(() => MeasurementSetDescriptionOverviewUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => MeasurementDescriptionUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    measurements?: MeasurementDescriptionUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceUpdateManyWithoutMeasurementSetDescriptionInput;
}
