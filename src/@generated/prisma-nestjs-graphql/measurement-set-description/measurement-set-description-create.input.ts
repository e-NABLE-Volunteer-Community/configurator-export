import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../measurement-set-description-overview/measurement-set-description-overview-create-nested-many-without-measurement-set-description.input';
import { MeasurementDescriptionCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../measurement-description/measurement-description-create-nested-many-without-measurement-set-description.input';
import { DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../device/device-create-nested-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionCreateInput {

    @Field(() => MeasurementSetDescriptionOverviewCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => MeasurementDescriptionCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    measurements?: MeasurementDescriptionCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceCreateNestedManyWithoutMeasurementSetDescriptionInput;
}
