import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../measurement-description/measurement-description-create-nested-many-without-measurement-set-description.input';
import { DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../device/device-create-nested-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionCreateWithoutOverviewsInput {

    @Field(() => MeasurementDescriptionCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    measurements?: MeasurementDescriptionCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput;
}
