import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateInput } from './measurement-description-create.input';

@ArgsType()
export class CreateOneMeasurementDescriptionArgs {

    @Field(() => MeasurementDescriptionCreateInput, {nullable:false})
    data!: MeasurementDescriptionCreateInput;
}
