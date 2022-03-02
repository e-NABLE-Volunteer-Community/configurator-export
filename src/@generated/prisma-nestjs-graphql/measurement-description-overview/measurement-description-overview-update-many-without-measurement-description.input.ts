import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput } from './measurement-description-overview-create-without-measurement-description.input';
import { MeasurementDescriptionOverviewCreateOrConnectWithoutMeasurementDescriptionInput } from './measurement-description-overview-create-or-connect-without-measurement-description.input';
import { MeasurementDescriptionOverviewUpsertWithWhereUniqueWithoutMeasurementDescriptionInput } from './measurement-description-overview-upsert-with-where-unique-without-measurement-description.input';
import { MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInputEnvelope } from './measurement-description-overview-create-many-measurement-description-input-envelope.input';
import { MeasurementDescriptionOverviewWhereUniqueInput } from './measurement-description-overview-where-unique.input';
import { MeasurementDescriptionOverviewUpdateWithWhereUniqueWithoutMeasurementDescriptionInput } from './measurement-description-overview-update-with-where-unique-without-measurement-description.input';
import { MeasurementDescriptionOverviewUpdateManyWithWhereWithoutMeasurementDescriptionInput } from './measurement-description-overview-update-many-with-where-without-measurement-description.input';
import { MeasurementDescriptionOverviewScalarWhereInput } from './measurement-description-overview-scalar-where.input';

@InputType()
export class MeasurementDescriptionOverviewUpdateManyWithoutMeasurementDescriptionInput {

    @Field(() => [MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput], {nullable:true})
    create?: Array<MeasurementDescriptionOverviewCreateWithoutMeasurementDescriptionInput>;

    @Field(() => [MeasurementDescriptionOverviewCreateOrConnectWithoutMeasurementDescriptionInput], {nullable:true})
    connectOrCreate?: Array<MeasurementDescriptionOverviewCreateOrConnectWithoutMeasurementDescriptionInput>;

    @Field(() => [MeasurementDescriptionOverviewUpsertWithWhereUniqueWithoutMeasurementDescriptionInput], {nullable:true})
    upsert?: Array<MeasurementDescriptionOverviewUpsertWithWhereUniqueWithoutMeasurementDescriptionInput>;

    @Field(() => MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInputEnvelope, {nullable:true})
    createMany?: MeasurementDescriptionOverviewCreateManyMeasurementDescriptionInputEnvelope;

    @Field(() => [MeasurementDescriptionOverviewWhereUniqueInput], {nullable:true})
    set?: Array<MeasurementDescriptionOverviewWhereUniqueInput>;

    @Field(() => [MeasurementDescriptionOverviewWhereUniqueInput], {nullable:true})
    disconnect?: Array<MeasurementDescriptionOverviewWhereUniqueInput>;

    @Field(() => [MeasurementDescriptionOverviewWhereUniqueInput], {nullable:true})
    delete?: Array<MeasurementDescriptionOverviewWhereUniqueInput>;

    @Field(() => [MeasurementDescriptionOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<MeasurementDescriptionOverviewWhereUniqueInput>;

    @Field(() => [MeasurementDescriptionOverviewUpdateWithWhereUniqueWithoutMeasurementDescriptionInput], {nullable:true})
    update?: Array<MeasurementDescriptionOverviewUpdateWithWhereUniqueWithoutMeasurementDescriptionInput>;

    @Field(() => [MeasurementDescriptionOverviewUpdateManyWithWhereWithoutMeasurementDescriptionInput], {nullable:true})
    updateMany?: Array<MeasurementDescriptionOverviewUpdateManyWithWhereWithoutMeasurementDescriptionInput>;

    @Field(() => [MeasurementDescriptionOverviewScalarWhereInput], {nullable:true})
    deleteMany?: Array<MeasurementDescriptionOverviewScalarWhereInput>;
}
