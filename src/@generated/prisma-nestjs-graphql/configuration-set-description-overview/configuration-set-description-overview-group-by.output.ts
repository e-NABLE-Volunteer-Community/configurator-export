import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCountAggregate } from './configuration-set-description-overview-count-aggregate.output';
import { ConfigurationSetDescriptionOverviewAvgAggregate } from './configuration-set-description-overview-avg-aggregate.output';
import { ConfigurationSetDescriptionOverviewSumAggregate } from './configuration-set-description-overview-sum-aggregate.output';
import { ConfigurationSetDescriptionOverviewMinAggregate } from './configuration-set-description-overview-min-aggregate.output';
import { ConfigurationSetDescriptionOverviewMaxAggregate } from './configuration-set-description-overview-max-aggregate.output';

@ObjectType()
export class ConfigurationSetDescriptionOverviewGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    configurationSetDescriptionId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => ConfigurationSetDescriptionOverviewCountAggregate, {nullable:true})
    _count?: ConfigurationSetDescriptionOverviewCountAggregate;

    @Field(() => ConfigurationSetDescriptionOverviewAvgAggregate, {nullable:true})
    _avg?: ConfigurationSetDescriptionOverviewAvgAggregate;

    @Field(() => ConfigurationSetDescriptionOverviewSumAggregate, {nullable:true})
    _sum?: ConfigurationSetDescriptionOverviewSumAggregate;

    @Field(() => ConfigurationSetDescriptionOverviewMinAggregate, {nullable:true})
    _min?: ConfigurationSetDescriptionOverviewMinAggregate;

    @Field(() => ConfigurationSetDescriptionOverviewMaxAggregate, {nullable:true})
    _max?: ConfigurationSetDescriptionOverviewMaxAggregate;
}
