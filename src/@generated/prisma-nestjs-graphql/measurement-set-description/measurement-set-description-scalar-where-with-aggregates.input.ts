import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MeasurementSetDescriptionScalarWhereWithAggregatesInput {

    @Field(() => [MeasurementSetDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MeasurementSetDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => [MeasurementSetDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MeasurementSetDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => [MeasurementSetDescriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MeasurementSetDescriptionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;
}
