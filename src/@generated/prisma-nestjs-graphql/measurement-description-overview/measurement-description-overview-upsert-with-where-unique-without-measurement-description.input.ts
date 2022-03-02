import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';
import { MeasurementDescriptionOverviewUpdateWithoutMeasurementDescriptionInput } from './measurement-description-overview-update-without-measurement-description.input';
import { MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput } from './measurement-description-overview-create-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionOverviewUpsertWithWhereUniqueWithoutMeasurementDescriptionInput {

    @Field(() => MeasurementDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionOverviewWhereUniqueInput;

    @Field(() => MeasurementDescriptionOverviewUpdateWithoutMeasurementDescriptionInput, {nullable:false})
    update!: MeasurementDescriptionOverviewUpdateWithoutMeasurementDescriptionInput;

    @Field(() => MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput, {nullable:false})
    create!: MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput;
}
