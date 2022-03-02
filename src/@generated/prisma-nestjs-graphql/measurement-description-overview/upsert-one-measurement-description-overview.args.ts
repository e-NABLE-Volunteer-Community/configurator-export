import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';
import { MeasurementDescriptionOverviewCreateInput } from './measurement-description-overview-create.input';
import { MeasurementDescriptionOverviewUpdateInput } from './measurement-description-overview-update.input';

@ArgsType()
export class UpsertOneMeasurementDescriptionOverviewArgs {

    @Field(() => MeasurementDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionOverviewWhereUniqueInput;

    @Field(() => MeasurementDescriptionOverviewCreateInput, {nullable:false})
    create!: MeasurementDescriptionOverviewCreateInput;

    @Field(() => MeasurementDescriptionOverviewUpdateInput, {nullable:false})
    update!: MeasurementDescriptionOverviewUpdateInput;
}
