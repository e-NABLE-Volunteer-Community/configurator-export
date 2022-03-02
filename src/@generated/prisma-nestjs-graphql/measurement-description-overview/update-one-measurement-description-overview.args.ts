import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewUpdateInput } from './measurement-description-overview-update.input';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';

@ArgsType()
export class UpdateOneMeasurementDescriptionOverviewArgs {

    @Field(() => MeasurementDescriptionOverviewUpdateInput, {nullable:false})
    data!: MeasurementDescriptionOverviewUpdateInput;

    @Field(() => MeasurementDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionOverviewWhereUniqueInput;
}
