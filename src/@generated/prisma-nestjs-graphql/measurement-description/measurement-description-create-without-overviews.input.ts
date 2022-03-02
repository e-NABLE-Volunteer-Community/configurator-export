import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionKind } from '../prisma/measurement-description-kind.enum';
import { MeasurementSetDescriptionCreateNestedOneWithoutMeasurementsInput } from '../measurement-set-description/measurement-set-description-create-nested-one-without-measurements.input';

@InputType()
export class MeasurementDescriptionCreateWithoutOverviewsInput {

    @Field(() => MeasurementDescriptionKind, {nullable:false})
    kind!: keyof typeof MeasurementDescriptionKind;

    @Field(() => MeasurementSetDescriptionCreateNestedOneWithoutMeasurementsInput, {nullable:false})
    measurementSetDescription!: MeasurementSetDescriptionCreateNestedOneWithoutMeasurementsInput;
}
