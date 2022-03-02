import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionUpdateInput } from './measurement-description-update.input';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';

@ArgsType()
export class UpdateOneMeasurementDescriptionArgs {

    @Field(() => MeasurementDescriptionUpdateInput, {nullable:false})
    data!: MeasurementDescriptionUpdateInput;

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionWhereUniqueInput;
}
