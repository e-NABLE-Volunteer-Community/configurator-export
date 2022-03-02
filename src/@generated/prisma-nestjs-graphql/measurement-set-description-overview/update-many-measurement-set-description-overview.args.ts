import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewUpdateManyMutationInput } from './measurement-set-description-overview-update-many-mutation.input';
import { MeasurementSetDescriptionOverviewWhereInput } from './measurement-set-description-overview-where.input';

@ArgsType()
export class UpdateManyMeasurementSetDescriptionOverviewArgs {

    @Field(() => MeasurementSetDescriptionOverviewUpdateManyMutationInput, {nullable:false})
    data!: MeasurementSetDescriptionOverviewUpdateManyMutationInput;

    @Field(() => MeasurementSetDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementSetDescriptionOverviewWhereInput;
}
