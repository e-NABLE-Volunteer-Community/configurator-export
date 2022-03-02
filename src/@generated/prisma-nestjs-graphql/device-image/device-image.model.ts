import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Device } from '../device/device.model';

@ObjectType()
export class DeviceImage {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => String, {nullable:false})
    image!: string;

    @Field(() => String, {nullable:true})
    locale!: string | null;

    @Field(() => Device, {nullable:false})
    device?: Device;
}
