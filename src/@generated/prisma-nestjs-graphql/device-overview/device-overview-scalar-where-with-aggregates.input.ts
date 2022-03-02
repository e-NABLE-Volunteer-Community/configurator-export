import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DeviceOverviewScalarWhereWithAggregatesInput {

    @Field(() => [DeviceOverviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeviceOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceOverviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeviceOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceOverviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeviceOverviewScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    deviceId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locale?: StringWithAggregatesFilter;
}
