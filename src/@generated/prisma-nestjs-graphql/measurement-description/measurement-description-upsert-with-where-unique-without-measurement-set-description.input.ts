import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';
import { MeasurementDescriptionUpdateWithoutMeasurementSetDescriptionInput } from './measurement-description-update-without-measurement-set-description.input';
import { MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput } from './measurement-description-create-without-measurement-set-description.input';

@InputType()
export class MeasurementDescriptionUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput {

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionWhereUniqueInput;

    @Field(() => MeasurementDescriptionUpdateWithoutMeasurementSetDescriptionInput, {nullable:false})
    update!: MeasurementDescriptionUpdateWithoutMeasurementSetDescriptionInput;

    @Field(() => MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput, {nullable:false})
    create!: MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput;
}
