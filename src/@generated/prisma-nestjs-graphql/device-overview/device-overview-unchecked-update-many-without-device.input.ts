import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceOverviewCreateWithoutDeviceInput } from './device-overview-create-without-device.input';
import { DeviceOverviewCreateOrConnectWithoutDeviceInput } from './device-overview-create-or-connect-without-device.input';
import { DeviceOverviewUpsertWithWhereUniqueWithoutDeviceInput } from './device-overview-upsert-with-where-unique-without-device.input';
import { DeviceOverviewCreateManyDeviceInputEnvelope } from './device-overview-create-many-device-input-envelope.input';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';
import { DeviceOverviewUpdateWithWhereUniqueWithoutDeviceInput } from './device-overview-update-with-where-unique-without-device.input';
import { DeviceOverviewUpdateManyWithWhereWithoutDeviceInput } from './device-overview-update-many-with-where-without-device.input';
import { DeviceOverviewScalarWhereInput } from './device-overview-scalar-where.input';

@InputType()
export class DeviceOverviewUncheckedUpdateManyWithoutDeviceInput {

    @Field(() => [DeviceOverviewCreateWithoutDeviceInput], {nullable:true})
    create?: Array<DeviceOverviewCreateWithoutDeviceInput>;

    @Field(() => [DeviceOverviewCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<DeviceOverviewCreateOrConnectWithoutDeviceInput>;

    @Field(() => [DeviceOverviewUpsertWithWhereUniqueWithoutDeviceInput], {nullable:true})
    upsert?: Array<DeviceOverviewUpsertWithWhereUniqueWithoutDeviceInput>;

    @Field(() => DeviceOverviewCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: DeviceOverviewCreateManyDeviceInputEnvelope;

    @Field(() => [DeviceOverviewWhereUniqueInput], {nullable:true})
    set?: Array<DeviceOverviewWhereUniqueInput>;

    @Field(() => [DeviceOverviewWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeviceOverviewWhereUniqueInput>;

    @Field(() => [DeviceOverviewWhereUniqueInput], {nullable:true})
    delete?: Array<DeviceOverviewWhereUniqueInput>;

    @Field(() => [DeviceOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceOverviewWhereUniqueInput>;

    @Field(() => [DeviceOverviewUpdateWithWhereUniqueWithoutDeviceInput], {nullable:true})
    update?: Array<DeviceOverviewUpdateWithWhereUniqueWithoutDeviceInput>;

    @Field(() => [DeviceOverviewUpdateManyWithWhereWithoutDeviceInput], {nullable:true})
    updateMany?: Array<DeviceOverviewUpdateManyWithWhereWithoutDeviceInput>;

    @Field(() => [DeviceOverviewScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeviceOverviewScalarWhereInput>;
}
