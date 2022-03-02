import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereInput } from './measurement-description-where.input';

@InputType()
export class MeasurementDescriptionListRelationFilter {

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    every?: MeasurementDescriptionWhereInput;

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    some?: MeasurementDescriptionWhereInput;

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    none?: MeasurementDescriptionWhereInput;
}
