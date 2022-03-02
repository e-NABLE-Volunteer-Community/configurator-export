import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MeasurementDescriptionRelationFilter } from '../measurement-description/measurement-description-relation-filter.input';

@InputType()
export class MeasurementDescriptionOverviewWhereInput {

    @Field(() => [MeasurementDescriptionOverviewWhereInput], {nullable:true})
    AND?: Array<MeasurementDescriptionOverviewWhereInput>;

    @Field(() => [MeasurementDescriptionOverviewWhereInput], {nullable:true})
    OR?: Array<MeasurementDescriptionOverviewWhereInput>;

    @Field(() => [MeasurementDescriptionOverviewWhereInput], {nullable:true})
    NOT?: Array<MeasurementDescriptionOverviewWhereInput>;

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

    @Field(() => MeasurementDescriptionRelationFilter, {nullable:true})
    measurementDescription?: MeasurementDescriptionRelationFilter;
}
