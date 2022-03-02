import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ConfigurationSetDescriptionOverviewListRelationFilter } from '../configuration-set-description-overview/configuration-set-description-overview-list-relation-filter.input';
import { ConfigurationDescriptionListRelationFilter } from '../configuration-description/configuration-description-list-relation-filter.input';
import { DeviceListRelationFilter } from '../device/device-list-relation-filter.input';

@InputType()
export class ConfigurationSetDescriptionWhereInput {

    @Field(() => [ConfigurationSetDescriptionWhereInput], {nullable:true})
    AND?: Array<ConfigurationSetDescriptionWhereInput>;

    @Field(() => [ConfigurationSetDescriptionWhereInput], {nullable:true})
    OR?: Array<ConfigurationSetDescriptionWhereInput>;

    @Field(() => [ConfigurationSetDescriptionWhereInput], {nullable:true})
    NOT?: Array<ConfigurationSetDescriptionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => ConfigurationSetDescriptionOverviewListRelationFilter, {nullable:true})
    overviews?: ConfigurationSetDescriptionOverviewListRelationFilter;

    @Field(() => ConfigurationDescriptionListRelationFilter, {nullable:true})
    configurations?: ConfigurationDescriptionListRelationFilter;

    @Field(() => DeviceListRelationFilter, {nullable:true})
    deviceMeasurements?: DeviceListRelationFilter;

    @Field(() => DeviceListRelationFilter, {nullable:true})
    deviceOptions?: DeviceListRelationFilter;
}
