import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ComponentListRelationFilter } from '../component/component-list-relation-filter.input';
import { DeviceAuthorListRelationFilter } from '../device-author/device-author-list-relation-filter.input';
import { DeviceExtraListRelationFilter } from '../device-extra/device-extra-list-relation-filter.input';
import { DeviceImageListRelationFilter } from '../device-image/device-image-list-relation-filter.input';
import { DeviceOverviewListRelationFilter } from '../device-overview/device-overview-list-relation-filter.input';
import { ConfigurationSetDescriptionRelationFilter } from '../configuration-set-description/configuration-set-description-relation-filter.input';

@InputType()
export class DeviceWhereInput {

    @Field(() => [DeviceWhereInput], {nullable:true})
    AND?: Array<DeviceWhereInput>;

    @Field(() => [DeviceWhereInput], {nullable:true})
    OR?: Array<DeviceWhereInput>;

    @Field(() => [DeviceWhereInput], {nullable:true})
    NOT?: Array<DeviceWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    measurementSetDescriptionId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    optionSetDescriptionId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ComponentListRelationFilter, {nullable:true})
    components?: ComponentListRelationFilter;

    @Field(() => DeviceAuthorListRelationFilter, {nullable:true})
    deviceAuthors?: DeviceAuthorListRelationFilter;

    @Field(() => DeviceExtraListRelationFilter, {nullable:true})
    deviceExtras?: DeviceExtraListRelationFilter;

    @Field(() => DeviceImageListRelationFilter, {nullable:true})
    deviceImages?: DeviceImageListRelationFilter;

    @Field(() => DeviceOverviewListRelationFilter, {nullable:true})
    deviceOverviews?: DeviceOverviewListRelationFilter;

    @Field(() => ConfigurationSetDescriptionRelationFilter, {nullable:true})
    measurementSetDescription?: ConfigurationSetDescriptionRelationFilter;

    @Field(() => ConfigurationSetDescriptionRelationFilter, {nullable:true})
    optionSetDescription?: ConfigurationSetDescriptionRelationFilter;
}
