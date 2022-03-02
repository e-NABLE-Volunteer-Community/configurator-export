import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';
import { MeasurementSetDescriptionCreateWithoutMeasurementsInput } from './measurement-set-description-create-without-measurements.input';

@InputType()
export class MeasurementSetDescriptionCreateOrConnectWithoutMeasurementsInput {

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionCreateWithoutMeasurementsInput, {nullable:false})
    create!: MeasurementSetDescriptionCreateWithoutMeasurementsInput;
}
