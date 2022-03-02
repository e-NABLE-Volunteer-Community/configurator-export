import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutMeasurementSetDescriptionInput } from './device-create-without-measurement-set-description.input';
import { DeviceCreateOrConnectWithoutMeasurementSetDescriptionInput } from './device-create-or-connect-without-measurement-set-description.input';
import { DeviceUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput } from './device-upsert-with-where-unique-without-measurement-set-description.input';
import { DeviceCreateManyMeasurementSetDescriptionInputEnvelope } from './device-create-many-measurement-set-description-input-envelope.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput } from './device-update-with-where-unique-without-measurement-set-description.input';
import { DeviceUpdateManyWithWhereWithoutMeasurementSetDescriptionInput } from './device-update-many-with-where-without-measurement-set-description.input';
import { DeviceScalarWhereInput } from './device-scalar-where.input';

@InputType()
export class DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput {

    @Field(() => [DeviceCreateWithoutMeasurementSetDescriptionInput], {nullable:true})
    create?: Array<DeviceCreateWithoutMeasurementSetDescriptionInput>;

    @Field(() => [DeviceCreateOrConnectWithoutMeasurementSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<DeviceCreateOrConnectWithoutMeasurementSetDescriptionInput>;

    @Field(() => [DeviceUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput], {nullable:true})
    upsert?: Array<DeviceUpsertWithWhereUniqueWithoutMeasurementSetDescriptionInput>;

    @Field(() => DeviceCreateManyMeasurementSetDescriptionInputEnvelope, {nullable:true})
    createMany?: DeviceCreateManyMeasurementSetDescriptionInputEnvelope;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    set?: Array<DeviceWhereUniqueInput>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeviceWhereUniqueInput>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    delete?: Array<DeviceWhereUniqueInput>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceWhereUniqueInput>;

    @Field(() => [DeviceUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput], {nullable:true})
    update?: Array<DeviceUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput>;

    @Field(() => [DeviceUpdateManyWithWhereWithoutMeasurementSetDescriptionInput], {nullable:true})
    updateMany?: Array<DeviceUpdateManyWithWhereWithoutMeasurementSetDescriptionInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeviceScalarWhereInput>;
}
