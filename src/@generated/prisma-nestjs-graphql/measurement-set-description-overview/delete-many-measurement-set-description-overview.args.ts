import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewWhereInput } from './measurement-set-description-overview-where.input';

@ArgsType()
export class DeleteManyMeasurementSetDescriptionOverviewArgs {

    @Field(() => MeasurementSetDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementSetDescriptionOverviewWhereInput;
}
