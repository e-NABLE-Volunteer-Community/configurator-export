import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MeasurementDescriptionOverviewScalarWhereInput {

    @Field(() => [MeasurementDescriptionOverviewScalarWhereInput], {nullable:true})
    AND?: Array<MeasurementDescriptionOverviewScalarWhereInput>;

    @Field(() => [MeasurementDescriptionOverviewScalarWhereInput], {nullable:true})
    OR?: Array<MeasurementDescriptionOverviewScalarWhereInput>;

    @Field(() => [MeasurementDescriptionOverviewScalarWhereInput], {nullable:true})
    NOT?: Array<MeasurementDescriptionOverviewScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    measurementDescriptionId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    locale?: StringFilter;
}
