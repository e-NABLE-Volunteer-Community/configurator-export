import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverview } from '../measurement-set-description-overview/measurement-set-description-overview.model';
import { MeasurementDescription } from '../measurement-description/measurement-description.model';
import { Device } from '../device/device.model';
import { MeasurementSetDescriptionCount } from './measurement-set-description-count.output';

@ObjectType()
export class MeasurementSetDescription {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [MeasurementSetDescriptionOverview], {nullable:true})
    overviews?: Array<MeasurementSetDescriptionOverview>;

    @Field(() => [MeasurementDescription], {nullable:true})
    measurements?: Array<MeasurementDescription>;

    @Field(() => [Device], {nullable:true})
    devices?: Array<Device>;

    @Field(() => MeasurementSetDescriptionCount, {nullable:false})
    _count?: MeasurementSetDescriptionCount;
}
