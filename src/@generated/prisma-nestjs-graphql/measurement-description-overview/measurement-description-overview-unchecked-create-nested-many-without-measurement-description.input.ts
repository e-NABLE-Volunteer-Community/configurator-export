import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput } from './measurement-description-overview-create-without-measurement-description.input';
import { MeasurementDescriptionOverviewCreateOrConnectWithoutMeasurementDescriptionInput } from './measurement-description-overview-create-or-connect-without-measurement-description.input';
import { MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInputEnvelope } from './measurement-description-overview-create-many-measurement-description-input-envelope.input';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';

@InputType()
export class MeasurementDescriptionOverviewUncheckedCreateNestedManyWithoutMeasurementDescriptionInput {

    @Field(() => [MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput], {nullable:true})
    create?: Array<MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput>;

    @Field(() => [MeasurementDescriptionOverviewCreateOrConnectWithoutMeasurementDescriptionInput], {nullable:true})
    connectOrCreate?: Array<MeasurementDescriptionOverviewCreateOrConnectWithoutMeasurementDescriptionInput>;

    @Field(() => MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInputEnvelope, {nullable:true})
    createMany?: MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInputEnvelope;

    @Field(() => [MeasurementDescriptionOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<MeasurementDescriptionOverviewWhereUniqueInput>;
}
