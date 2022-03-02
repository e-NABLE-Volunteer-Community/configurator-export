import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumMeasurementDescriptionKindFilter } from '../prisma/enum-measurement-description-kind-filter.input';
import { MeasurementSetDescriptionRelationFilter } from '../measurement-set-description/measurement-set-description-relation-filter.input';
import { MeasurementDescriptionOverviewListRelationFilter } from '../measurement-description-overview/measurement-description-overview-list-relation-filter.input';

@InputType()
export class MeasurementDescriptionWhereInput {

    @Field(() => [MeasurementDescriptionWhereInput], {nullable:true})
    AND?: Array<MeasurementDescriptionWhereInput>;

    @Field(() => [MeasurementDescriptionWhereInput], {nullable:true})
    OR?: Array<MeasurementDescriptionWhereInput>;

    @Field(() => [MeasurementDescriptionWhereInput], {nullable:true})
    NOT?: Array<MeasurementDescriptionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    measurementSetDescriptionId?: IntFilter;

    @Field(() => EnumMeasurementDescriptionKindFilter, {nullable:true})
    kind?: EnumMeasurementDescriptionKindFilter;

    @Field(() => MeasurementSetDescriptionRelationFilter, {nullable:true})
    measurementSetDescription?: MeasurementSetDescriptionRelationFilter;

    @Field(() => MeasurementDescriptionOverviewListRelationFilter, {nullable:true})
    overviews?: MeasurementDescriptionOverviewListRelationFilter;
}
