import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereInput } from './measurement-set-description-where.input';

@ArgsType()
export class DeleteManyMeasurementSetDescriptionArgs {

    @Field(() => MeasurementSetDescriptionWhereInput, {nullable:true})
    where?: MeasurementSetDescriptionWhereInput;
}
