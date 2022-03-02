import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionScalarWhereInput } from './measurement-description-scalar-where.input';
import { MeasurementDescriptionUpdateManyMutationInput } from './measurement-description-update-many-mutation.input';

@InputType()
export class MeasurementDescriptionUpdateManyWithWhereWithoutMeasurementSetDescriptionInput {

    @Field(() => MeasurementDescriptionScalarWhereInput, {nullable:false})
    where!: MeasurementDescriptionScalarWhereInput;

    @Field(() => MeasurementDescriptionUpdateManyMutationInput, {nullable:false})
    data!: MeasurementDescriptionUpdateManyMutationInput;
}
