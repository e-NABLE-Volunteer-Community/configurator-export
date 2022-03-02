import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class DeviceImageScalarWhereWithAggregatesInput {

    @Field(() => [DeviceImageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeviceImageScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceImageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeviceImageScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceImageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeviceImageScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    deviceId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    image?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    locale?: StringNullableWithAggregatesFilter;
}
