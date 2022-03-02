import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../measurement-set-description-overview/measurement-set-description-overview-unchecked-create-nested-many-without-measurement-set-description.input';
import { MeasurementDescriptionUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../measurement-description/measurement-description-unchecked-create-nested-many-without-measurement-set-description.input';
import { DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../device/device-unchecked-create-nested-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => MeasurementSetDescriptionOverviewUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => MeasurementDescriptionUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    measurements?: MeasurementDescriptionUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput;
}
