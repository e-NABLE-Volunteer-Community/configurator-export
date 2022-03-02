import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewCountAggregate } from './configuration-description-overview-count-aggregate.output';
import { ConfigurationDescriptionOverviewAvgAggregate } from './configuration-description-overview-avg-aggregate.output';
import { ConfigurationDescriptionOverviewSumAggregate } from './configuration-description-overview-sum-aggregate.output';
import { ConfigurationDescriptionOverviewMinAggregate } from './configuration-description-overview-min-aggregate.output';
import { ConfigurationDescriptionOverviewMaxAggregate } from './configuration-description-overview-max-aggregate.output';

@ObjectType()
export class AggregateConfigurationDescriptionOverview {

    @Field(() => ConfigurationDescriptionOverviewCountAggregate, {nullable:true})
    _count?: ConfigurationDescriptionOverviewCountAggregate;

    @Field(() => ConfigurationDescriptionOverviewAvgAggregate, {nullable:true})
    _avg?: ConfigurationDescriptionOverviewAvgAggregate;

    @Field(() => ConfigurationDescriptionOverviewSumAggregate, {nullable:true})
    _sum?: ConfigurationDescriptionOverviewSumAggregate;

    @Field(() => ConfigurationDescriptionOverviewMinAggregate, {nullable:true})
    _min?: ConfigurationDescriptionOverviewMinAggregate;

    @Field(() => ConfigurationDescriptionOverviewMaxAggregate, {nullable:true})
    _max?: ConfigurationDescriptionOverviewMaxAggregate;
}
