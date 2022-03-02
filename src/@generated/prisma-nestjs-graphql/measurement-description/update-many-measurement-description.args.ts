import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionUpdateManyMutationInput } from './measurement-description-update-many-mutation.input';
import { MeasurementDescriptionWhereInput } from './measurement-description-where.input';

@ArgsType()
export class UpdateManyMeasurementDescriptionArgs {

    @Field(() => MeasurementDescriptionUpdateManyMutationInput, {nullable:false})
    data!: MeasurementDescriptionUpdateManyMutationInput;

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    where?: MeasurementDescriptionWhereInput;
}
