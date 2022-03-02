import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput } from './measurement-description-create-without-measurement-set-description.input';
import { MeasurementDescriptionCreateOrConnectWithoutMeasurementSetDescriptionInput } from './measurement-description-create-or-connect-without-measurement-set-description.input';
import { MeasurementDescriptionUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput } from './measurement-description-upsert-with-where-unique-without-measurement-set-description.input';
import { MeasurementDescriptionCreateManyMeasurementSetDescriptionInputEnvelope } from './measurement-description-create-many-measurement-set-description-input-envelope.input';
import { MeasurementDescriptionWhereUniqueInput } from './measurement-description-where-unique.input';
import { MeasurementDescriptionUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput } from './measurement-description-update-with-where-unique-without-measurement-set-description.input';
import { MeasurementDescriptionUpdateManyWithWhereWithoutMeasurementSetDescriptionInput } from './measurement-description-update-many-with-where-without-measurement-set-description.input';
import { MeasurementDescriptionScalarWhereInput } from './measurement-description-scalar-where.input';

@InputType()
export class MeasurementDescriptionUpdateManyWithoutMeasurementSetDescriptionInput {

    @Field(() => [MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput], {nullable:true})
    create?: Array<MeasurementDescriptionCreateWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementDescriptionCreateOrConnectWithoutMeasurementSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<MeasurementDescriptionCreateOrConnectWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementDescriptionUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput], {nullable:true})
    upsert?: Array<MeasurementDescriptionUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput>;

    @Field(() => MeasurementDescriptionCreateManyMeasurementSetDescriptionInputEnvelope, {nullable:true})
    createMany?: MeasurementDescriptionCreateManyMeasurementSetDescriptionInputEnvelope;

    @Field(() => [MeasurementDescriptionWhereUniqueInput], {nullable:true})
    set?: Array<MeasurementDescriptionWhereUniqueInput>;

    @Field(() => [MeasurementDescriptionWhereUniqueInput], {nullable:true})
    disconnect?: Array<MeasurementDescriptionWhereUniqueInput>;

    @Field(() => [MeasurementDescriptionWhereUniqueInput], {nullable:true})
    delete?: Array<MeasurementDescriptionWhereUniqueInput>;

    @Field(() => [MeasurementDescriptionWhereUniqueInput], {nullable:true})
    connect?: Array<MeasurementDescriptionWhereUniqueInput>;

    @Field(() => [MeasurementDescriptionUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput], {nullable:true})
    update?: Array<MeasurementDescriptionUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementDescriptionUpdateManyWithWhereWithoutMeasurementSetDescriptionInput], {nullable:true})
    updateMany?: Array<MeasurementDescriptionUpdateManyWithWhereWithoutMeasurementSetDescriptionInput>;

    @Field(() => [MeasurementDescriptionScalarWhereInput], {nullable:true})
    deleteMany?: Array<MeasurementDescriptionScalarWhereInput>;
}
