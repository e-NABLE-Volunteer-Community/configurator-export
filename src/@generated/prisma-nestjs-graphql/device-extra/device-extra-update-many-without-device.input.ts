import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceExtraCreateWithoutDeviceInput } from './device-extra-create-without-device.input';
import { DeviceExtraCreateOrConnectWithoutDeviceInput } from './device-extra-create-or-connect-without-device.input';
import { DeviceExtraUpsertWithWhereUniqueWithoutDeviceInput } from './device-extra-upsert-with-where-unique-without-device.input';
import { DeviceExtraCreateManyDeviceInputEnvelope } from './device-extra-create-many-device-input-envelope.input';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';
import { DeviceExtraUpdateWithWhereUniqueWithoutDeviceInput } from './device-extra-update-with-where-unique-without-device.input';
import { DeviceExtraUpdateManyWithWhereWithoutDeviceInput } from './device-extra-update-many-with-where-without-device.input';
import { DeviceExtraScalarWhereInput } from './device-extra-scalar-where.input';

@InputType()
export class DeviceExtraUpdateManyWithoutDeviceInput {

    @Field(() => [DeviceExtraCreateWithoutDeviceInput], {nullable:true})
    create?: Array<DeviceExtraCreateWithoutDeviceInput>;

    @Field(() => [DeviceExtraCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<DeviceExtraCreateOrConnectWithoutDeviceInput>;

    @Field(() => [DeviceExtraUpsertWithWhereUniqueWithoutDeviceInput], {nullable:true})
    upsert?: Array<DeviceExtraUpsertWithWhereUniqueWithoutDeviceInput>;

    @Field(() => DeviceExtraCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: DeviceExtraCreateManyDeviceInputEnvelope;

    @Field(() => [DeviceExtraWhereUniqueInput], {nullable:true})
    set?: Array<DeviceExtraWhereUniqueInput>;

    @Field(() => [DeviceExtraWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeviceExtraWhereUniqueInput>;

    @Field(() => [DeviceExtraWhereUniqueInput], {nullable:true})
    delete?: Array<DeviceExtraWhereUniqueInput>;

    @Field(() => [DeviceExtraWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceExtraWhereUniqueInput>;

    @Field(() => [DeviceExtraUpdateWithWhereUniqueWithoutDeviceInput], {nullable:true})
    update?: Array<DeviceExtraUpdateWithWhereUniqueWithoutDeviceInput>;

    @Field(() => [DeviceExtraUpdateManyWithWhereWithoutDeviceInput], {nullable:true})
    updateMany?: Array<DeviceExtraUpdateManyWithWhereWithoutDeviceInput>;

    @Field(() => [DeviceExtraScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeviceExtraScalarWhereInput>;
}
