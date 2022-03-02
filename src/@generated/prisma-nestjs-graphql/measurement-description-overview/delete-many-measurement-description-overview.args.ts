import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereInput } from './measurement-description-overview-where.input';

@ArgsType()
export class DeleteManyMeasurementDescriptionOverviewArgs {

    @Field(() => MeasurementDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementDescriptionOverviewWhereInput;
}
