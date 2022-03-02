import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MeasurementSetDescriptionRelationFilter } from '../measurement-set-description/measurement-set-description-relation-filter.input';

@InputType()
export class MeasurementSetDescriptionOverviewWhereInput {

    @Field(() => [MeasurementSetDescriptionOverviewWhereInput], {nullable:true})
    AND?: Array<MeasurementSetDescriptionOverviewWhereInput>;

    @Field(() => [MeasurementSetDescriptionOverviewWhereInput], {nullable:true})
    OR?: Array<MeasurementSetDescriptionOverviewWhereInput>;

    @Field(() => [MeasurementSetDescriptionOverviewWhereInput], {nullable:true})
    NOT?: Array<MeasurementSetDescriptionOverviewWhereInput>;

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

    @Field(() => MeasurementSetDescriptionRelationFilter, {nullable:true})
    measurementSetDescription?: MeasurementSetDescriptionRelationFilter;
}
