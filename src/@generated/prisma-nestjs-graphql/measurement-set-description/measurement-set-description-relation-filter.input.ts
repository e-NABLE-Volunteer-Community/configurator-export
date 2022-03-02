import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereInput } from './measurement-set-description-where.input';

@InputType()
export class MeasurementSetDescriptionRelationFilter {

    @Field(() => MeasurementSetDescriptionWhereInput, {nullable:true})
    is?: MeasurementSetDescriptionWhereInput;

    @Field(() => MeasurementSetDescriptionWhereInput, {nullable:true})
    isNot?: MeasurementSetDescriptionWhereInput;
}
