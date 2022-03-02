import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { MeasurementSetDescriptionOverviewListRelationFilter } from '../measurement-set-description-overview/measurement-set-description-overview-list-relation-filter.input';
import { MeasurementDescriptionListRelationFilter } from '../measurement-description/measurement-description-list-relation-filter.input';
import { DeviceListRelationFilter } from '../device/device-list-relation-filter.input';

@InputType()
export class MeasurementSetDescriptionWhereInput {

    @Field(() => [MeasurementSetDescriptionWhereInput], {nullable:true})
    AND?: Array<MeasurementSetDescriptionWhereInput>;

    @Field(() => [MeasurementSetDescriptionWhereInput], {nullable:true})
    OR?: Array<MeasurementSetDescriptionWhereInput>;

    @Field(() => [MeasurementSetDescriptionWhereInput], {nullable:true})
    NOT?: Array<MeasurementSetDescriptionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => MeasurementSetDescriptionOverviewListRelationFilter, {nullable:true})
    overviews?: MeasurementSetDescriptionOverviewListRelationFilter;

    @Field(() => MeasurementDescriptionListRelationFilter, {nullable:true})
    measurements?: MeasurementDescriptionListRelationFilter;

    @Field(() => DeviceListRelationFilter, {nullable:true})
    devices?: DeviceListRelationFilter;
}
