import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionUpdateInput } from './measurement-set-description-update.input';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';

@ArgsType()
export class UpdateOneMeasurementSetDescriptionArgs {

    @Field(() => MeasurementSetDescriptionUpdateInput, {nullable:false})
    data!: MeasurementSetDescriptionUpdateInput;

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionWhereUniqueInput;
}
