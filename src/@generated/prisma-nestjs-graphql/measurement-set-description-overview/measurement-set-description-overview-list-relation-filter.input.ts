import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewWhereInput } from './measurement-set-description-overview-where.input';

@InputType()
export class MeasurementSetDescriptionOverviewListRelationFilter {

    @Field(() => MeasurementSetDescriptionOverviewWhereInput, {nullable:true})
    every?: MeasurementSetDescriptionOverviewWhereInput;

    @Field(() => MeasurementSetDescriptionOverviewWhereInput, {nullable:true})
    some?: MeasurementSetDescriptionOverviewWhereInput;

    @Field(() => MeasurementSetDescriptionOverviewWhereInput, {nullable:true})
    none?: MeasurementSetDescriptionOverviewWhereInput;
}
