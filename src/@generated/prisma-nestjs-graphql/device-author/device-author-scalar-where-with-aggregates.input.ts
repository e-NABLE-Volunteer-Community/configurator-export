import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class DeviceAuthorScalarWhereWithAggregatesInput {

    @Field(() => [DeviceAuthorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeviceAuthorScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceAuthorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeviceAuthorScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceAuthorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeviceAuthorScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    deviceId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    authorId?: IntWithAggregatesFilter;
}
