import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DeviceRelationFilter } from '../device/device-relation-filter.input';

@InputType()
export class DeviceImageWhereInput {

    @Field(() => [DeviceImageWhereInput], {nullable:true})
    AND?: Array<DeviceImageWhereInput>;

    @Field(() => [DeviceImageWhereInput], {nullable:true})
    OR?: Array<DeviceImageWhereInput>;

    @Field(() => [DeviceImageWhereInput], {nullable:true})
    NOT?: Array<DeviceImageWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    deviceId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locale?: StringNullableFilter;

    @Field(() => DeviceRelationFilter, {nullable:true})
    device?: DeviceRelationFilter;
}
