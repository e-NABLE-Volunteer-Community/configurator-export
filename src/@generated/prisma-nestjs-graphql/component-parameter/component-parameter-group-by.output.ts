import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComponentParameterKind } from '../component/component-parameter-kind.enum';
import { ComponentParameterCountAggregate } from './component-parameter-count-aggregate.output';
import { ComponentParameterAvgAggregate } from './component-parameter-avg-aggregate.output';
import { ComponentParameterSumAggregate } from './component-parameter-sum-aggregate.output';
import { ComponentParameterMinAggregate } from './component-parameter-min-aggregate.output';
import { ComponentParameterMaxAggregate } from './component-parameter-max-aggregate.output';

@ObjectType()
export class ComponentParameterGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    componentId!: number;

    @Field(() => ComponentParameterKind, {nullable:false})
    kind!: keyof typeof ComponentParameterKind;

    @Field(() => String, {nullable:false})
    cadName!: string;

    @Field(() => String, {nullable:true})
    humanName?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ComponentParameterCountAggregate, {nullable:true})
    _count?: ComponentParameterCountAggregate;

    @Field(() => ComponentParameterAvgAggregate, {nullable:true})
    _avg?: ComponentParameterAvgAggregate;

    @Field(() => ComponentParameterSumAggregate, {nullable:true})
    _sum?: ComponentParameterSumAggregate;

    @Field(() => ComponentParameterMinAggregate, {nullable:true})
    _min?: ComponentParameterMinAggregate;

    @Field(() => ComponentParameterMaxAggregate, {nullable:true})
    _max?: ComponentParameterMaxAggregate;
}
