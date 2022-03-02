import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Device } from '../device/device.model';

@ObjectType()
export class DeviceExtra {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => String, {nullable:true})
    locale!: string | null;

    @Field(() => Device, {nullable:false})
    device?: Device;
}
