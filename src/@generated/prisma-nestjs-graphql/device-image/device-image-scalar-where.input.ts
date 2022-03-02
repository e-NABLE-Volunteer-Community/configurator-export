import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class DeviceImageScalarWhereInput {

    @Field(() => [DeviceImageScalarWhereInput], {nullable:true})
    AND?: Array<DeviceImageScalarWhereInput>;

    @Field(() => [DeviceImageScalarWhereInput], {nullable:true})
    OR?: Array<DeviceImageScalarWhereInput>;

    @Field(() => [DeviceImageScalarWhereInput], {nullable:true})
    NOT?: Array<DeviceImageScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    deviceId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    image?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    locale?: StringNullableFilter;
}
