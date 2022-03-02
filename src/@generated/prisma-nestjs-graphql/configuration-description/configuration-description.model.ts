import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionKind } from '../prisma/configuration-description-kind.enum';
import { ConfigurationSetDescription } from '../configuration-set-description/configuration-set-description.model';
import { ConfigurationDescriptionOverview } from '../configuration-description-overview/configuration-description-overview.model';
import { ComponentParameterConfigurationDescriptionPairing } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing.model';
import { ConfigurationDescriptionCount } from './configuration-description-count.output';

@ObjectType()
export class ConfigurationDescription {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    configurationSetDescriptionId!: number;

    @Field(() => ConfigurationDescriptionKind, {nullable:false})
    kind!: keyof typeof ConfigurationDescriptionKind;

    @Field(() => ConfigurationSetDescription, {nullable:false})
    configurationSetDescription?: ConfigurationSetDescription;

    @Field(() => [ConfigurationDescriptionOverview], {nullable:true})
    overviews?: Array<ConfigurationDescriptionOverview>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairing], {nullable:true})
    pairings?: Array<ComponentParameterConfigurationDescriptionPairing>;

    @Field(() => ConfigurationDescriptionCount, {nullable:false})
    _count?: ConfigurationDescriptionCount;
}
