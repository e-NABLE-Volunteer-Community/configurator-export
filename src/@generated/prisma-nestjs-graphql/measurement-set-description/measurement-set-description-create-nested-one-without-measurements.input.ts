import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateWithoutMeasurementsInput } from './measurement-set-description-create-without-measurements.input';
import { MeasurementSetDescriptionCreateOrConnectWithoutMeasurementsInput } from './measurement-set-description-create-or-connect-without-measurements.input';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';

@InputType()
export class MeasurementSetDescriptionCreateNestedOneWithoutMeasurementsInput {

    @Field(() => MeasurementSetDescriptionCreateWithoutMeasurementsInput, {nullable:true})
    create?: MeasurementSetDescriptionCreateWithoutMeasurementsInput;

    @Field(() => MeasurementSetDescriptionCreateOrConnectWithoutMeasurementsInput, {nullable:true})
    connectOrCreate?: MeasurementSetDescriptionCreateOrConnectWithoutMeasurementsInput;

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: MeasurementSetDescriptionWhereUniqueInput;
}
