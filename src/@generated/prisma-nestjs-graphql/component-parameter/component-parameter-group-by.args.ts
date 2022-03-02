import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterWhereInput } from './component-parameter-where.input';
import { ComponentParameterOrderByWithAggregationInput } from './component-parameter-order-by-with-aggregation.input';
import { ComponentParameterScalarFieldEnum } from './component-parameter-scalar-field.enum';
import { ComponentParameterScalarWhereWithAggregatesInput } from './component-parameter-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ComponentParameterCountAggregateInput } from './component-parameter-count-aggregate.input';
import { ComponentParameterAvgAggregateInput } from './component-parameter-avg-aggregate.input';
import { ComponentParameterSumAggregateInput } from './component-parameter-sum-aggregate.input';
import { ComponentParameterMinAggregateInput } from './component-parameter-min-aggregate.input';
import { ComponentParameterMaxAggregateInput } from './component-parameter-max-aggregate.input';

@ArgsType()
export class ComponentParameterGroupByArgs {

    @Field(() => ComponentParameterWhereInput, {nullable:true})
    where?: ComponentParameterWhereInput;

    @Field(() => [ComponentParameterOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ComponentParameterOrderByWithAggregationInput>;

    @Field(() => [ComponentParameterScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ComponentParameterScalarFieldEnum>;

    @Field(() => ComponentParameterScalarWhereWithAggregatesInput, {nullable:true})
    having?: ComponentParameterScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ComponentParameterCountAggregateInput, {nullable:true})
    _count?: ComponentParameterCountAggregateInput;

    @Field(() => ComponentParameterAvgAggregateInput, {nullable:true})
    _avg?: ComponentParameterAvgAggregateInput;

    @Field(() => ComponentParameterSumAggregateInput, {nullable:true})
    _sum?: ComponentParameterSumAggregateInput;

    @Field(() => ComponentParameterMinAggregateInput, {nullable:true})
    _min?: ComponentParameterMinAggregateInput;

    @Field(() => ComponentParameterMaxAggregateInput, {nullable:true})
    _max?: ComponentParameterMaxAggregateInput;
}
