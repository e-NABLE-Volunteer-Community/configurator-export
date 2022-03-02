import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComponentParameter } from '../component-parameter/component-parameter.model';
import { ConfigurationDescription } from '../configuration-description/configuration-description.model';

@ObjectType()
export class ComponentParameterConfigurationDescriptionPairing {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    componentParameterId!: number;

    @Field(() => Int, {nullable:false})
    configurationDescriptionId!: number;

    @Field(() => ComponentParameter, {nullable:false})
    componentParameter?: ComponentParameter;

    @Field(() => ConfigurationDescription, {nullable:false})
    configurationDescription?: ConfigurationDescription;
}
