import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MeasurementDescriptionOverviewScalarWhereWithAggregatesInput {

    @Field(() => [MeasurementDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MeasurementDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [MeasurementDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MeasurementDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => [MeasurementDescriptionOverviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MeasurementDescriptionOverviewScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    measurementDescriptionId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locale?: StringWithAggregatesFilter;
}
