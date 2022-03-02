import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateInput } from './measurement-set-description-create.input';

@ArgsType()
export class CreateOneMeasurementSetDescriptionArgs {

    @Field(() => MeasurementSetDescriptionCreateInput, {nullable:false})
    data!: MeasurementSetDescriptionCreateInput;
}
