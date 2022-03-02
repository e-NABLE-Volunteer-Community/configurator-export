import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';
import { MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput } from './measurement-description-overview-create-without-measurement-description.input';

@InputType()
export class MeasurementDescriptionOverviewCreateOrConnectWithoutMeasurementDescriptionInput {

    @Field(() => MeasurementDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: MeasurementDescriptionOverviewWhereUniqueInput;

    @Field(() => MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput, {nullable:false})
    create!: MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput;
}
