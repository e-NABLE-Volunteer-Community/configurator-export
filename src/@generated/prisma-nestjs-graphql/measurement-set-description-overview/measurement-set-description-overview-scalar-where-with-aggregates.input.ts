import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput {

    @Field(() => [MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MeasurementSetDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    measurementSetDescriptionId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locale?: StringWithAggregatesFilter;
}
