import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ComponentScalarWhereWithAggregatesInput {

    @Field(() => [ComponentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ComponentScalarWhereWithAggregatesInput>;

    @Field(() => [ComponentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ComponentScalarWhereWithAggregatesInput>;

    @Field(() => [ComponentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ComponentScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    deviceId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    count?: IntNullableWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    location?: JsonWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    exportLocation?: StringWithAggregatesFilter;
}
