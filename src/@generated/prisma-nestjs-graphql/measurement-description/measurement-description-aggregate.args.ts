import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionWhereInput } from './measurement-description-where.input';
import { MeasurementDescriptionOrderByWithRelationInput } from './measurement-description-order-by-with-relation.input';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MeasurementDescriptionCountAggregateInput } from './measurement-description-count-aggregate.input';
import { MeasurementDescriptionAvgAggregateInput } from './measurement-description-avg-aggregate.input';
import { MeasurementDescriptionSumAggregateInput } from './measurement-description-sum-aggregate.input';
import { MeasurementDescriptionMinAggregateInput } from './measurement-description-min-aggregate.input';
import { MeasurementDescriptionMaxAggregateInput } from './measurement-description-max-aggregate.input';

@ArgsType()
export class MeasurementDescriptionAggregateArgs {

    @Field(() => MeasurementDescriptionWhereInput, {nullable:true})
    where?: MeasurementDescriptionWhereInput;

    @Field(() => [MeasurementDescriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MeasurementDescriptionOrderByWithRelationInput>;

    @Field(() => MeasurementDescriptionWhereUniqueInput, {nullable:true})
    cursor?: MeasurementDescriptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MeasurementDescriptionCountAggregateInput, {nullable:true})
    _count?: MeasurementDescriptionCountAggregateInput;

    @Field(() => MeasurementDescriptionAvgAggregateInput, {nullable:true})
    _avg?: MeasurementDescriptionAvgAggregateInput;

    @Field(() => MeasurementDescriptionSumAggregateInput, {nullable:true})
    _sum?: MeasurementDescriptionSumAggregateInput;

    @Field(() => MeasurementDescriptionMinAggregateInput, {nullable:true})
    _min?: MeasurementDescriptionMinAggregateInput;

    @Field(() => MeasurementDescriptionMaxAggregateInput, {nullable:true})
    _max?: MeasurementDescriptionMaxAggregateInput;
}
