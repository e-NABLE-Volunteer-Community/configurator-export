import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-create-without-measurement-set-description.input';
import { MeasurementSetDescriptionOverviewCreateOrConnectWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-create-or-connect-without-measurement-set-description.input';
import { MeasurementSetDescriptionOverviewUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-upsert-with-where-unique-without-measurement-set-description.input';
import { MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInputEnvelope } from './measurement-set-description-overview-create-many-measurement-set-description-input-envelope.input';
import { MeasurementSetDescriptionOverviewWhereUniqueInput } from './measurement-set-description-overview-where-unique.input';
import { MeasurementSetDescriptionOverviewUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-update-with-where-unique-without-measurement-set-description.input';
import { MeasurementSetDescriptionOverviewUpdateManyWithWhereWithoutMeasurementSetDescriptionInput } from './measurement-set-description-overview-update-many-with-where-without-measurement-set-description.input';
import { MeasurementSetDescriptionOverviewScalarWhereInput } from './measurement-set-description-overview-scalar-where.input';

@InputType()
export class MeasurementSetDescriptionOverviewUpdateManyWithoutMeasurementSetDescriptionInput {

    @Field(() => [MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput], {nullable:true})
    create?: Array<MeasurementSetDescriptionOverviewCreateWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementSetDescriptionOverviewCreateOrConnectWithoutMeasurementSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<MeasurementSetDescriptionOverviewCreateOrConnectWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementSetDescriptionOverviewUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput], {nullable:true})
    upsert?: Array<MeasurementSetDescriptionOverviewUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput>;

    @Field(() => MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInputEnvelope, {nullable:true})
    createMany?: MeasurementSetDescriptionOverviewCreateManyMeasurementSetDescriptionInputEnvelope;

    @Field(() => [MeasurementSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    set?: Array<MeasurementSetDescriptionOverviewWhereUniqueInput>;

    @Field(() => [MeasurementSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    disconnect?: Array<MeasurementSetDescriptionOverviewWhereUniqueInput>;

    @Field(() => [MeasurementSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    delete?: Array<MeasurementSetDescriptionOverviewWhereUniqueInput>;

    @Field(() => [MeasurementSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<MeasurementSetDescriptionOverviewWhereUniqueInput>;

    @Field(() => [MeasurementSetDescriptionOverviewUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput], {nullable:true})
    update?: Array<MeasurementSetDescriptionOverviewUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementSetDescriptionOverviewUpdateManyWithWhereWithoutMeasurementSetDescriptionInput], {nullable:true})
    updateMany?: Array<MeasurementSetDescriptionOverviewUpdateManyWithWhereWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementSetDescriptionOverviewScalarWhereInput], {nullable:true})
    deleteMany?: Array<MeasurementSetDescriptionOverviewScalarWhereInput>;
}
