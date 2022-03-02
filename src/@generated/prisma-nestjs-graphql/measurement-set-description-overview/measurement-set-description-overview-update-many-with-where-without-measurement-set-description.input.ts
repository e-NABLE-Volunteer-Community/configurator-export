import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewScalarWhereInput } from './measurement-set-description-overview-scalar-where.input';
import { MeasurementSetDescriptionOverviewUpdateManyMutationInput } from './measurement-set-description-overview-update-many-mutation.input';

@InputType()
export class MeasurementSetDescriptionOverviewUpdateManyWithWhereWithoutMeasurementSetDescriptionInput {

    @Field(() => MeasurementSetDescriptionOverviewScalarWhereInput, {nullable:false})
    where!: MeasurementSetDescriptionOverviewScalarWhereInput;

    @Field(() => MeasurementSetDescriptionOverviewUpdateManyMutationInput, {nullable:false})
    data!: MeasurementSetDescriptionOverviewUpdateManyMutationInput;
}
