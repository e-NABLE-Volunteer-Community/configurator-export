import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Component } from '../component/component.model';
import { DeviceAuthor } from '../device-author/device-author.model';
import { DeviceExtra } from '../device-extra/device-extra.model';
import { DeviceImage } from '../device-image/device-image.model';
import { DeviceOverview } from '../device-overview/device-overview.model';
import { ConfigurationSetDescription } from '../configuration-set-description/configuration-set-description.model';
import { DeviceCount } from './device-count.output';

@ObjectType()
export class Device {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    measurementSetDescriptionId!: number | null;

    @Field(() => Int, {nullable:true})
    optionSetDescriptionId!: number | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Component], {nullable:true})
    components?: Array<Component>;

    @Field(() => [DeviceAuthor], {nullable:true})
    deviceAuthors?: Array<DeviceAuthor>;

    @Field(() => [DeviceExtra], {nullable:true})
    deviceExtras?: Array<DeviceExtra>;

    @Field(() => [DeviceImage], {nullable:true})
    deviceImages?: Array<DeviceImage>;

    @Field(() => [DeviceOverview], {nullable:true})
    deviceOverviews?: Array<DeviceOverview>;

    @Field(() => ConfigurationSetDescription, {nullable:true})
    measurementSetDescription?: ConfigurationSetDescription | null;

    @Field(() => ConfigurationSetDescription, {nullable:true})
    optionSetDescription?: ConfigurationSetDescription | null;

    @Field(() => DeviceCount, {nullable:false})
    _count?: DeviceCount;
}
