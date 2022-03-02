import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DeviceScalarWhereWithAggregatesInput {

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    measurementSetDescriptionId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    optionSetDescriptionId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
