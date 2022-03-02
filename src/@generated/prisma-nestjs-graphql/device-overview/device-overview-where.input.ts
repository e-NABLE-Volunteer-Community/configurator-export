import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DeviceRelationFilter } from '../device/device-relation-filter.input';

@InputType()
export class DeviceOverviewWhereInput {

    @Field(() => [DeviceOverviewWhereInput], {nullable:true})
    AND?: Array<DeviceOverviewWhereInput>;

    @Field(() => [DeviceOverviewWhereInput], {nullable:true})
    OR?: Array<DeviceOverviewWhereInput>;

    @Field(() => [DeviceOverviewWhereInput], {nullable:true})
    NOT?: Array<DeviceOverviewWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    deviceId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    locale?: StringFilter;

    @Field(() => DeviceRelationFilter, {nullable:true})
    device?: DeviceRelationFilter;
}
