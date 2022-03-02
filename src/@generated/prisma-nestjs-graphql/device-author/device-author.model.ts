import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Device } from '../device/device.model';
import { Author } from '../author/author.model';

@ObjectType()
export class DeviceAuthor {

    @Field(() => Int, {nullable:false})
    deviceId!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Device, {nullable:false})
    device?: Device;

    @Field(() => Author, {nullable:false})
    author?: Author;
}
