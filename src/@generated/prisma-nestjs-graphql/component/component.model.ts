import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Device } from '../device/device.model';
import { ComponentOverview } from '../component-overview/component-overview.model';
import { ComponentParameter } from '../component-parameter/component-parameter.model';
import { ComponentCount } from './component-count.output';

@ObjectType()
export class Component {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:true})
    count!: number | null;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => Device, {nullable:false})
    device?: Device;

    @Field(() => [ComponentOverview], {nullable:true})
    componentOverviews?: Array<ComponentOverview>;

    @Field(() => [ComponentParameter], {nullable:true})
    parameters?: Array<ComponentParameter>;

    @Field(() => ComponentCount, {nullable:false})
    _count?: ComponentCount;
}
