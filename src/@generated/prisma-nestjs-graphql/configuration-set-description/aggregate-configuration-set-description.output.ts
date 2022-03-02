import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCountAggregate } from './configuration-set-description-count-aggregate.output';
import { ConfigurationSetDescriptionAvgAggregate } from './configuration-set-description-avg-aggregate.output';
import { ConfigurationSetDescriptionSumAggregate } from './configuration-set-description-sum-aggregate.output';
import { ConfigurationSetDescriptionMinAggregate } from './configuration-set-description-min-aggregate.output';
import { ConfigurationSetDescriptionMaxAggregate } from './configuration-set-description-max-aggregate.output';

@ObjectType()
export class AggregateConfigurationSetDescription {

    @Field(() => ConfigurationSetDescriptionCountAggregate, {nullable:true})
    _count?: ConfigurationSetDescriptionCountAggregate;

    @Field(() => ConfigurationSetDescriptionAvgAggregate, {nullable:true})
    _avg?: ConfigurationSetDescriptionAvgAggregate;

    @Field(() => ConfigurationSetDescriptionSumAggregate, {nullable:true})
    _sum?: ConfigurationSetDescriptionSumAggregate;

    @Field(() => ConfigurationSetDescriptionMinAggregate, {nullable:true})
    _min?: ConfigurationSetDescriptionMinAggregate;

    @Field(() => ConfigurationSetDescriptionMaxAggregate, {nullable:true})
    _max?: ConfigurationSetDescriptionMaxAggregate;
}
