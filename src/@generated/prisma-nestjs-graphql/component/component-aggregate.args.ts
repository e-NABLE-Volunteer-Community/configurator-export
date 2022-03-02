import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentWhereInput } from './component-where.input';
import { ComponentOrderByWithRelationInput } from './component-order-by-with-relation.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComponentCountAggregateInput } from './component-count-aggregate.input';
import { ComponentAvgAggregateInput } from './component-avg-aggregate.input';
import { ComponentSumAggregateInput } from './component-sum-aggregate.input';
import { ComponentMinAggregateInput } from './component-min-aggregate.input';
import { ComponentMaxAggregateInput } from './component-max-aggregate.input';

@ArgsType()
export class ComponentAggregateArgs {

    @Field(() => ComponentWhereInput, {nullable:true})
    where?: ComponentWhereInput;

    @Field(() => [ComponentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComponentOrderByWithRelationInput>;

    @Field(() => ComponentWhereUniqueInput, {nullable:true})
    cursor?: ComponentWhereUniqueInput;

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
