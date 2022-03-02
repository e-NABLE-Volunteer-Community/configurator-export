import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DeviceRelationFilter } from '../device/device-relation-filter.input';

@InputType()
export class DeviceExtraWhereInput {

    @Field(() => [DeviceExtraWhereInput], {nullable:true})
    AND?: Array<DeviceExtraWhereInput>;

    @Field(() => [DeviceExtraWhereInput], {nullable:true})
    OR?: Array<DeviceExtraWhereInput>;

    @Field(() => [DeviceExtraWhereInput], {nullable:true})
    NOT?: Array<DeviceExtraWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    deviceId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    location?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    exportLocation?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locale?: StringNullableFilter;

    @Field(() => DeviceRelationFilter, {nullable:true})
    device?: DeviceRelationFilter;
}
