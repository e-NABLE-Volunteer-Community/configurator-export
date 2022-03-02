import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewWhereUniqueInput } from './measurement-set-description-overview-where-unique.input';
import { MeasurementSetDescriptionOverviewCreateInput } from './measurement-set-description-overview-create.input';
import { MeasurementSetDescriptionOverviewUpdateInput } from './measurement-set-description-overview-update.input';

@ArgsType()
export class UpsertOneMeasurementSetDescriptionOverviewArgs {

    @Field(() => MeasurementSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementSetDescriptionOverviewWhereUniqueInput;

    @Field(() => MeasurementSetDescriptionOverviewCreateInput, {nullable:false})
    create!: MeasurementSetDescriptionOverviewCreateInput;

    @Field(() => MeasurementSetDescriptionOverviewUpdateInput, {nullable:false})
    update!: MeasurementSetDescriptionOverviewUpdateInput;
}
