import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComponentParameterKind } from '../component/component-parameter-kind.enum';
import { Component } from '../component/component.model';
import { ComponentParameterConfigurationDescriptionPairing } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing.model';

@ObjectType()
export class ComponentParameter {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    componentId!: number;

    @Field(() => ComponentParameterKind, {nullable:false})
    kind!: keyof typeof ComponentParameterKind;

    @Field(() => String, {nullable:false})
    cadName!: string;

    @Field(() => String, {nullable:true})
    humanName!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Component, {nullable:false})
    component?: Component;

    @Field(() => ComponentParameterConfigurationDescriptionPairing, {nullable:true})
    pairing?: ComponentParameterConfigurationDescriptionPairing | null;
}
