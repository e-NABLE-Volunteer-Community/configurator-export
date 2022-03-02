import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewCreateInput } from './measurement-description-overview-create.input';

@ArgsType()
export class CreateOneMeasurementDescriptionOverviewArgs {

    @Field(() => MeasurementDescriptionOverviewCreateInput, {nullable:false})
    data!: MeasurementDescriptionOverviewCreateInput;
}
