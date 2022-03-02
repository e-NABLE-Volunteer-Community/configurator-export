import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumMeasurementDescriptionKindWithAggregatesFilter } from '../prisma/enum-measurement-description-kind-with-aggregates-filter.input';

@InputType()
export class MeasurementDescriptionScalarWhereWithAggregatesInput {

    @Field(() => [MeasurementDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MeasurementDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => [MeasurementDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MeasurementDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => [MeasurementDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MeasurementDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    measurementSetDescriptionId?: IntWithAggregatesFilter;

    @Field(() => EnumMeasurementDescriptionKindWithAggregatesFilter, {nullable:true})
    kind?: EnumMeasurementDescriptionKindWithAggregatesFilter;
}
