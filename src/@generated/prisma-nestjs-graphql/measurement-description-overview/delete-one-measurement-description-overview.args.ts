import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';

@ArgsType()
export class DeleteOneMeasurementDescriptionOverviewArgs {

    @Field(() => MeasurementDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionOverviewWhereUniqueInput;
}
