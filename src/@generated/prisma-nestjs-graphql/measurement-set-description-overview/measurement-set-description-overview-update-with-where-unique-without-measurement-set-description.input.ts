import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewWhereUniqueInput } from './measurement-set-description-overview-where-unique.input';
import { MeasurementSetDescriptionOverviewUpdateWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-update-without-measurement-set-description.input';

@InputType()
export class MeasurementSetDescriptionOverviewUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput {

    @Field(() => MeasurementSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionOverviewWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionOverviewUpdateWithoutMeasurementSetDescriptionInput, {nullable:false})
    data!: MeasurementSetDescriptionOverviewUpdateWithoutMeasurementSetDescriptionInput;
}
