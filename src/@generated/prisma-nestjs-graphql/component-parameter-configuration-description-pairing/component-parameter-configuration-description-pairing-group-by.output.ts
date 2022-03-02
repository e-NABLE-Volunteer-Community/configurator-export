import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCountAggregate } from './component-parameter-configuration-description-pairing-count-aggregate.output';
import { ComponentParameterConfigurationDescriptionPairingAvgAggregate } from './component-parameter-configuration-description-pairing-avg-aggregate.output';
import { ComponentParameterConfigurationDescriptionPairingSumAggregate } from './component-parameter-configuration-description-pairing-sum-aggregate.output';
import { ComponentParameterConfigurationDescriptionPairingMinAggregate } from './component-parameter-configuration-description-pairing-min-aggregate.output';
import { ComponentParameterConfigurationDescriptionPairingMaxAggregate } from './component-parameter-configuration-description-pairing-max-aggregate.output';

@ObjectType()
export class ComponentParameterConfigurationDescriptionPairingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    componentParameterId!: number;

    @Field(() => Int, {nullable:false})
    configurationDescriptionId!: number;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCountAggregate, {nullable:true})
    _count?: ComponentParameterConfigurationDescriptionPairingCountAggregate;

    @Field(() => ComponentParameterConfigurationDescriptionPairingAvgAggregate, {nullable:true})
    _avg?: ComponentParameterConfigurationDescriptionPairingAvgAggregate;

    @Field(() => ComponentParameterConfigurationDescriptionPairingSumAggregate, {nullable:true})
    _sum?: ComponentParameterConfigurationDescriptionPairingSumAggregate;

    @Field(() => ComponentParameterConfigurationDescriptionPairingMinAggregate, {nullable:true})
    _min?: ComponentParameterConfigurationDescriptionPairingMinAggregate;

    @Field(() => ComponentParameterConfigurationDescriptionPairingMaxAggregate, {nullable:true})
    _max?: ComponentParameterConfigurationDescriptionPairingMaxAggregate;
}
