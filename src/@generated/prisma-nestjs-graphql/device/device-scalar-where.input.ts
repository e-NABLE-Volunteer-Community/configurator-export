import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DeviceScalarWhereInput {

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    AND?: Array<DeviceScalarWhereInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    OR?: Array<DeviceScalarWhereInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    NOT?: Array<DeviceScalarWhereInput>;

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
}
