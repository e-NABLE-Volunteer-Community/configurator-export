import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionWhereInput } from './measurement-set-description-where.input';
import { MeasurementSetDescriptionOrderByWithAggregationInput } from './measurement-set-description-order-by-with-aggregation.input';
import { MeasurementSetDescriptionScalarFieldEnum } from './measurement-set-description-scalar-field.enum';
import { MeasurementSetDescriptionScalarWhereWithAggregatesInput } from './measurement-set-description-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MeasurementSetDescriptionCountAggregateInput } from './measurement-set-description-count-aggregate.input';
import { MeasurementSetDescriptionAvgAggregateInput } from './measurement-set-description-avg-aggregate.input';
import { MeasurementSetDescriptionSumAggregateInput } from './measurement-set-description-sum-aggregate.input';
import { MeasurementSetDescriptionMinAggregateInput } from './measurement-set-description-min-aggregate.input';
import { MeasurementSetDescriptionMaxAggregateInput } from './measurement-set-description-max-aggregate.input';

@ArgsType()
export class MeasurementSetDescriptionGroupByArgs {

    @Field(() => MeasurementSetDescriptionWhereInput, {nullable:true})
    where?: MeasurementSetDescriptionWhereInput;

    @Field(() => [MeasurementSetDescriptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MeasurementSetDescriptionOrderByWithAggregationInput>;

    @Field(() => [MeasurementSetDescriptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MeasurementSetDescriptionScalarFieldEnum>;

    @Field(() => MeasurementSetDescriptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: MeasurementSetDescriptionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MeasurementSetDescriptionCountAggregateInput, {nullable:true})
    _count?: MeasurementSetDescriptionCountAggregateInput;

    @Field(() => MeasurementSetDescriptionAvgAggregateInput, {nullable:true})
    _avg?: MeasurementSetDescriptionAvgAggregateInput;

    @Field(() => MeasurementSetDescriptionSumAggregateInput, {nullable:true})
    _sum?: MeasurementSetDescriptionSumAggregateInput;

    @Field(() => MeasurementSetDescriptionMinAggregateInput, {nullable:true})
    _min?: MeasurementSetDescriptionMinAggregateInput;

    @Field(() => MeasurementSetDescriptionMaxAggregateInput, {nullable:true})
    _max?: MeasurementSetDescriptionMaxAggregateInput;
}
