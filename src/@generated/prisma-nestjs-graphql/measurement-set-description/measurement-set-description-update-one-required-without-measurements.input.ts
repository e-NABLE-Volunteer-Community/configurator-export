import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateWithoutMeasurementsInput } from './measurement-set-description-create-without-measurements.input';
import { MeasurementSetDescriptionCreateOrConnectWithoutMeasurementsInput } from './measurement-set-description-create-or-connect-without-measurements.input';
import { MeasurementSetDescriptionUpsertWithoutMeasurementsInput } from './measurement-set-description-upsert-without-measurements.input';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';
import { MeasurementSetDescriptionUpdateWithoutMeasurementsInput } from './measurement-set-description-update-without-measurements.input';

@InputType()
export class MeasurementSetDescriptionUpdateOneRequiredWithoutMeasurementsInput {

    @Field(() => MeasurementSetDescriptionCreateWithoutMeasurementsInput, {nullable:true})
    create?: MeasurementSetDescriptionCreateWithoutMeasurementsInput;

    @Field(() => MeasurementSetDescriptionCreateOrConnectWithoutMeasurementsInput, {nullable:true})
    connectOrCreate?: MeasurementSetDescriptionCreateOrConnectWithoutMeasurementsInput;

    @Field(() => MeasurementSetDescriptionUpsertWithoutMeasurementsInput, {nullable:true})
    upsert?: MeasurementSetDescriptionUpsertWithoutMeasurementsInput;

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: MeasurementSetDescriptionWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionUpdateWithoutMeasurementsInput, {nullable:true})
    update?: MeasurementSetDescriptionUpdateWithoutMeasurementsInput;
}
