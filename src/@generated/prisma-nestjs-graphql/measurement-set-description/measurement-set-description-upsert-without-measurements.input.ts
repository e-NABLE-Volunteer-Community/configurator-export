import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionUpdateWithoutMeasurementsInput } from './measurement-set-description-update-without-measurements.input';
import { MeasurementSetDescriptionCreateWithoutMeasurementsInput } from './measurement-set-description-create-without-measurements.input';

@InputType()
export class MeasurementSetDescriptionUpsertWithoutMeasurementsInput {

    @Field(() => MeasurementSetDescriptionUpdateWithoutMeasurementsInput, {nullable:false})
    update!: MeasurementSetDescriptionUpdateWithoutMeasurementsInput;

    @Field(() => MeasurementSetDescriptionCreateWithoutMeasurementsInput, {nullable:false})
    create!: MeasurementSetDescriptionCreateWithoutMeasurementsInput;
}
