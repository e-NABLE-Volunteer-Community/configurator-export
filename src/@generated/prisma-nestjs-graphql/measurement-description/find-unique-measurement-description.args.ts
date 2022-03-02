import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';

@ArgsType()
export class FindUniqueMeasurementDescriptionArgs {

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionWhereUniqueInput;
}
