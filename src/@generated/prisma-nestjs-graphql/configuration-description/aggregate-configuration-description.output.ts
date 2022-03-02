import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConfigurationDescriptionCountAggregate } from './configuration-description-count-aggregate.output';
import { ConfigurationDescriptionAvgAggregate } from './configuration-description-avg-aggregate.output';
import { ConfigurationDescriptionSumAggregate } from './configuration-description-sum-aggregate.output';
import { ConfigurationDescriptionMinAggregate } from './configuration-description-min-aggregate.output';
import { ConfigurationDescriptionMaxAggregate } from './configuration-description-max-aggregate.output';

@ObjectType()
export class AggregateConfigurationDescription {

    @Field(() => ConfigurationDescriptionCountAggregate, {nullable:true})
    _count?: ConfigurationDescriptionCountAggregate;

    @Field(() => ConfigurationDescriptionAvgAggregate, {nullable:true})
    _avg?: ConfigurationDescriptionAvgAggregate;

    @Field(() => ConfigurationDescriptionSumAggregate, {nullable:true})
    _sum?: ConfigurationDescriptionSumAggregate;

    @Field(() => ConfigurationDescriptionMinAggregate, {nullable:true})
    _min?: ConfigurationDescriptionMinAggregate;

    @Field(() => ConfigurationDescriptionMaxAggregate, {nullable:true})
    _max?: ConfigurationDescriptionMaxAggregate;
}
