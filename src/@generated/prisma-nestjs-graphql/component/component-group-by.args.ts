import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentWhereInput } from './component-where.input';
import { ComponentOrderByWithAggregationInput } from './component-order-by-with-aggregation.input';
import { ComponentScalarFieldEnum } from './component-scalar-field.enum';
import { ComponentScalarWhereWithAggregatesInput } from './component-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ComponentCountAggregateInput } from './component-count-aggregate.input';
import { ComponentAvgAggregateInput } from './component-avg-aggregate.input';
import { ComponentSumAggregateInput } from './component-sum-aggregate.input';
import { ComponentMinAggregateInput } from './component-min-aggregate.input';
import { ComponentMaxAggregateInput } from './component-max-aggregate.input';

@ArgsType()
export class ComponentGroupByArgs {

    @Field(() => ComponentWhereInput, {nullable:true})
    where?: ComponentWhereInput;

    @Field(() => [ComponentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ComponentOrderByWithAggregationInput>;

    @Field(() => [ComponentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ComponentScalarFieldEnum>;

    @Field(() => ComponentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ComponentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ComponentCountAggregateInput, {nullable:true})
    _count?: ComponentCountAggregateInput;

    @Field(() => ComponentAvgAggregateInput, {nullable:true})
    _avg?: ComponentAvgAggregateInput;

    @Field(() => ComponentSumAggregateInput, {nullable:true})
    _sum?: ComponentSumAggregateInput;

    @Field(() => ComponentMinAggregateInput, {nullable:true})
    _min?: ComponentMinAggregateInput;

    @Field(() => ComponentMaxAggregateInput, {nullable:true})
    _max?: ComponentMaxAggregateInput;
}
