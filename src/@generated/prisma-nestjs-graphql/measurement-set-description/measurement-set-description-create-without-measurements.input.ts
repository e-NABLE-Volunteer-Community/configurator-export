import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../measurement-set-description-overview/measurement-set-description-overview-create-nested-many-without-measurement-set-description.input';
import { DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../device/device-create-nested-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionCreateWithoutMeasurementsInput {

    @Field(() => MeasurementSetDescriptionOverviewCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput;
}
