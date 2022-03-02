import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-create-without-measurement-set-description.input';
import { MeasurementSetDescriptionOverviewCreateOrConnectWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-create-or-connect-without-measurement-set-description.input';
import { MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInputEnvelope } from './measurement-set-description-overview-create-many-measurement-set-description-input-envelope.input';
import { MeasurementSetDescriptionOverviewWhereUniqueInput } from './measurement-set-description-overview-where-unique.input';

@InputType()
export class MeasurementSetDescriptionOverviewCreateNestedManyWithoutMeasurementSetDescriptionInput {

    @Field(() => [MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput], {nullable:true})
    create?: Array<MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementSetDescriptionOverviewCreateOrConnectWithoutMeasurementSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<MeasurementSetDescriptionOverviewCreateOrConnectWithoutMeasurementSetDescriptionInput>;

    @Field(() => MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInputEnvelope, {nullable:true})
    createMany?: MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInputEnvelope;

    @Field(() => [MeasurementSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<MeasurementSetDescriptionOverviewWhereUniqueInput>;
}
