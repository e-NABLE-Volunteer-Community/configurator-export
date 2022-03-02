import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewUpdateInput } from './measurement-set-description-overview-update.input';
import { MeasurementSetDescriptionOverviewWhereUniqueInput } from './measurement-set-description-overview-where-unique.input';

@ArgsType()
export class UpdateOneMeasurementSetDescriptionOverviewArgs {

    @Field(() => MeasurementSetDescriptionOverviewUpdateInput, {nullable:false})
    data!: MeasurementSetDescriptionOverviewUpdateInput;

    @Field(() => MeasurementSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionOverviewWhereUniqueInput;
}
