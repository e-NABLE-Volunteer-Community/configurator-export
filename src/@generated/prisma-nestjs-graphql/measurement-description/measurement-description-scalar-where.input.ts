import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumMeasurementDescriptionKindFilter } from '../prisma/enum-measurement-description-kind-filter.input';

@InputType()
export class MeasurementDescriptionScalarWhereInput {

    @Field(() => [MeasurementDescriptionScalarWhereInput], {nullable:true})
    AND?: Array<MeasurementDescriptionScalarWhereInput>;

    @Field(() => [MeasurementDescriptionScalarWhereInput], {nullable:true})
    OR?: Array<MeasurementDescriptionScalarWhereInput>;

    @Field(() => [MeasurementDescriptionScalarWhereInput], {nullable:true})
    NOT?: Array<MeasurementDescriptionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    measurementSetDescriptionId?: IntFilter;

    @Field(() => EnumMeasurementDescriptionKindFilter, {nullable:true})
    kind?: EnumMeasurementDescriptionKindFilter;
}
