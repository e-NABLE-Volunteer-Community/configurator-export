import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DeviceOverviewScalarWhereInput {

    @Field(() => [DeviceOverviewScalarWhereInput], {nullable:true})
    AND?: Array<DeviceOverviewScalarWhereInput>;

    @Field(() => [DeviceOverviewScalarWhereInput], {nullable:true})
    OR?: Array<DeviceOverviewScalarWhereInput>;

    @Field(() => [DeviceOverviewScalarWhereInput], {nullable:true})
    NOT?: Array<DeviceOverviewScalarWhereInput>;

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
}
