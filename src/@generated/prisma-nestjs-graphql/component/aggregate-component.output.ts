import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ComponentCountAggregate } from './component-count-aggregate.output';
import { ComponentAvgAggregate } from './component-avg-aggregate.output';
import { ComponentSumAggregate } from './component-sum-aggregate.output';
import { ComponentMinAggregate } from './component-min-aggregate.output';
import { ComponentMaxAggregate } from './component-max-aggregate.output';

@ObjectType()
export class AggregateComponent {

    @Field(() => ComponentCountAggregate, {nullable:true})
    _count?: ComponentCountAggregate;

    @Field(() => ComponentAvgAggregate, {nullable:true})
    _avg?: ComponentAvgAggregate;

    @Field(() => ComponentSumAggregate, {nullable:true})
    _sum?: ComponentSumAggregate;

    @Field(() => ComponentMinAggregate, {nullable:true})
    _min?: ComponentMinAggregate;

    @Field(() => ComponentMaxAggregate, {nullable:true})
    _max?: ComponentMaxAggregate;
}
