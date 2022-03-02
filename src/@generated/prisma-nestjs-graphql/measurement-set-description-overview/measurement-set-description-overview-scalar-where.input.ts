import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MeasurementSetDescriptionOverviewScalarWhereInput {

    @Field(() => [MeasurementSetDescriptionOverviewScalarWhereInput], {nullable:true})
    AND?: Array<MeasurementSetDescriptionOverviewScalarWhereInput>;

    @Field(() => [MeasurementSetDescriptionOverviewScalarWhereInput], {nullable:true})
    OR?: Array<MeasurementSetDescriptionOverviewScalarWhereInput>;

    @Field(() => [MeasurementSetDescriptionOverviewScalarWhereInput], {nullable:true})
    NOT?: Array<MeasurementSetDescriptionOverviewScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    measurementSetDescriptionId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    locale?: StringFilter;
}
