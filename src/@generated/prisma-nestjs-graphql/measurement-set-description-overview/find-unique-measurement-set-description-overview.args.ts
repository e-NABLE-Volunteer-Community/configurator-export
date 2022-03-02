import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewWhereUniqueInput } from './measurement-set-description-overview-where-unique.input';

@ArgsType()
export class FindUniqueMeasurementSetDescriptionOverviewArgs {

    @Field(() => MeasurementSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionOverviewWhereUniqueInput;
}
