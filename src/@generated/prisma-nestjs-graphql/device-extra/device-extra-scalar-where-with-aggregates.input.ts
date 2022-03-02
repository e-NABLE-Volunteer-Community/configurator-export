import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class DeviceExtraScalarWhereWithAggregatesInput {

    @Field(() => [DeviceExtraScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeviceExtraScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceExtraScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeviceExtraScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceExtraScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeviceExtraScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    deviceId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    location?: JsonWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    exportLocation?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    locale?: StringNullableWithAggregatesFilter;
}
