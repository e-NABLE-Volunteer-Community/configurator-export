import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewUpdateManyMutationInput } from './measurement-description-overview-update-many-mutation.input';
import { MeasurementDescriptionOverviewWhereInput } from './measurement-description-overview-where.input';

@ArgsType()
export class UpdateManyMeasurementDescriptionOverviewArgs {

    @Field(() => MeasurementDescriptionOverviewUpdateManyMutationInput, {nullable:false})
    data!: MeasurementDescriptionOverviewUpdateManyMutationInput;

    @Field(() => MeasurementDescriptionOverviewWhereInput, {nullable:true})
    where?: MeasurementDescriptionOverviewWhereInput;
}
