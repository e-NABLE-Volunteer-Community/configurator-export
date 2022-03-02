import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class DeviceExtraScalarWhereInput {

    @Field(() => [DeviceExtraScalarWhereInput], {nullable:true})
    AND?: Array<DeviceExtraScalarWhereInput>;

    @Field(() => [DeviceExtraScalarWhereInput], {nullable:true})
    OR?: Array<DeviceExtraScalarWhereInput>;

    @Field(() => [DeviceExtraScalarWhereInput], {nullable:true})
    NOT?: Array<DeviceExtraScalarWhereInput>;

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
}
