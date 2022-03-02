import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../measurement-description/measurement-description-unchecked-create-nested-many-without-measurement-set-description.input';
import { DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../device/device-unchecked-create-nested-many-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionUncheckedCreateWithoutOverviewsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => MeasurementDescriptionUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    measurements?: MeasurementDescriptionUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    devices?: DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput;
}
