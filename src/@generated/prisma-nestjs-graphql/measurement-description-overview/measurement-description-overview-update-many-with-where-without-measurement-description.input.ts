import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewScalarWhereInput } from './measurement-description-overview-scalar-where.input';
import { MeasurementDescriptionOverviewUpdateManyMutationInput } from './measurement-description-overview-update-many-mutation.input';

@InputType()
export class MeasurementDescriptionOverviewUpdateManyWithWhereWithoutMeasurementDescriptionInput {

    @Field(() => MeasurementDescriptionOverviewScalarWhereInput, {nullable:false})
    where!: MeasurementDescriptionOverviewScalarWhereInput;

    @Field(() => MeasurementDescriptionOverviewUpdateManyMutationInput, {nullable:false})
    data!: MeasurementDescriptionOverviewUpdateManyMutationInput;
}
