import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverview } from '../configuration-set-description-overview/configuration-set-description-overview.model';
import { ConfigurationDescription } from '../configuration-description/configuration-description.model';
import { Device } from '../device/device.model';
import { ConfigurationSetDescriptionCount } from './configuration-set-description-count.output';

@ObjectType()
export class ConfigurationSetDescription {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [ConfigurationSetDescriptionOverview], {nullable:true})
    overviews?: Array<ConfigurationSetDescriptionOverview>;

    @Field(() => [ConfigurationDescription], {nullable:true})
    configurations?: Array<ConfigurationDescription>;

    @Field(() => [Device], {nullable:true})
    deviceMeasurements?: Array<Device>;

    @Field(() => [Device], {nullable:true})
    deviceOptions?: Array<Device>;

    @Field(() => ConfigurationSetDescriptionCount, {nullable:false})
    _count?: ConfigurationSetDescriptionCount;
}
