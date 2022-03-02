import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCreateInput } from './measurement-set-description-overview-create.input';

@ArgsType()
export class CreateOneMeasurementSetDescriptionOverviewArgs {

    @Field(() => MeasurementSetDescriptionOverviewCreateInput, {nullable:false})
    data!: MeasurementSetDescriptionOverviewCreateInput;
}
