import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereInput } from './measurement-description-where.input';

@InputType()
export class MeasurementDescriptionRelationFilter {

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    is?: MeasurementDescriptionWhereInput;

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    isNot?: MeasurementDescriptionWhereInput;
}
