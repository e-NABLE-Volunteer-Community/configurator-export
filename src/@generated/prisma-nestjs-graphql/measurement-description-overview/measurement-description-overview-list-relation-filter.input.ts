import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereInput } from './measurement-description-overview-where.input';

@InputType()
export class MeasurementDescriptionOverviewListRelationFilter {

    @Field(() => MeasurementDescriptionOverviewWhereInput, {nullable:true})
    every?: MeasurementDescriptionOverviewWhereInput;

    @Field(() => MeasurementDescriptionOverviewWhereInput, {nullable:true})
    some?: MeasurementDescriptionOverviewWhereInput;

    @Field(() => MeasurementDescriptionOverviewWhereInput, {nullable:true})
    none?: MeasurementDescriptionOverviewWhereInput;
}
