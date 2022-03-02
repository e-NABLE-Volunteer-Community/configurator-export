import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereUniqueInput } from './measurement-set-description-where-unique.input';

@ArgsType()
export class DeleteOneMeasurementSetDescriptionArgs {

    @Field(() => MeasurementSetDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionWhereUniqueInput;
}
