import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereInput } from './measurement-description-where.input';

@ArgsType()
export class DeleteManyMeasurementDescriptionArgs {

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    where?: MeasurementDescriptionWhereInput;
}
