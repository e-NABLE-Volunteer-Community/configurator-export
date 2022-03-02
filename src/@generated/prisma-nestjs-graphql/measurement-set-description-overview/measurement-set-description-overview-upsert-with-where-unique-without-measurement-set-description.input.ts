import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewWhereUniqueInput } from './measurement-set-description-overview-where-unique.input';
import { MeasurementSetDescriptionOverviewUpdateWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-update-without-measurement-set-description.input';
import { MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-create-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionOverviewUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput {

    @Field(() => MeasurementSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionOverviewWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionOverviewUpdateWithoutMeasurementSetDescriptionInput, {nullable:false})
    update!: MeasurementSetDescriptionOverviewUpdateWithoutMeasurementSetDescriptionInput;

    @Field(() => MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput, {nullable:false})
    create!: MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput;
}
