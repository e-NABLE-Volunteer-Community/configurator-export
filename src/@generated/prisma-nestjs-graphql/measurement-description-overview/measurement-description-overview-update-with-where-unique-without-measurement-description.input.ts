import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';
import { MeasurementDescriptionOverviewUpdateWithoutMeasurementDescriptionInput } from './measurement-description-overview-update-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionOverviewUpdateWithWhereUniqueWithoutMeasurementDescriptionInput {

    @Field(() => MeasurementDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionOverviewWhereUniqueInput;

    @Field(() => MeasurementDescriptionOverviewUpdateWithoutMeasurementDescriptionInput, {nullable:false})
    data!: MeasurementDescriptionOverviewUpdateWithoutMeasurementDescriptionInput;
}
