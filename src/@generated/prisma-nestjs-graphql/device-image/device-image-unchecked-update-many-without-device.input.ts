import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceImageCreateWithoutDeviceInput } from './device-image-create-without-device.input';
import { DeviceImageCreateOrConnectWithoutDeviceInput } from './device-image-create-or-connect-without-device.input';
import { DeviceImageUpsertWithWhereUniqueWithoutDeviceInput } from './device-image-upsert-with-where-unique-without-device.input';
import { DeviceImageCreateManyDeviceInputEnvelope } from './device-image-create-many-device-input-envelope.input';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';
import { DeviceImageUpdateWithWhereUniqueWithoutDeviceInput } from './device-image-update-with-where-unique-without-device.input';
import { DeviceImageUpdateManyWithWhereWithoutDeviceInput } from './device-image-update-many-with-where-without-device.input';
import { DeviceImageScalarWhereInput } from './device-image-scalar-where.input';

@InputType()
export class DeviceImageUncheckedUpdateManyWithoutDeviceInput {

    @Field(() => [DeviceImageCreateWithoutDeviceInput], {nullable:true})
    create?: Array<DeviceImageCreateWithoutDeviceInput>;

    @Field(() => [DeviceImageCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<DeviceImageCreateOrConnectWithoutDeviceInput>;

    @Field(() => [DeviceImageUpsertWithWhereUniqueWithoutDeviceInput], {nullable:true})
    upsert?: Array<DeviceImageUpsertWithWhereUniqueWithoutDeviceInput>;

    @Field(() => DeviceImageCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: DeviceImageCreateManyDeviceInputEnvelope;

    @Field(() => [DeviceImageWhereUniqueInput], {nullable:true})
    set?: Array<DeviceImageWhereUniqueInput>;

    @Field(() => [DeviceImageWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeviceImageWhereUniqueInput>;

    @Field(() => [DeviceImageWhereUniqueInput], {nullable:true})
    delete?: Array<DeviceImageWhereUniqueInput>;

    @Field(() => [DeviceImageWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceImageWhereUniqueInput>;

    @Field(() => [DeviceImageUpdateWithWhereUniqueWithoutDeviceInput], {nullable:true})
    update?: Array<DeviceImageUpdateWithWhereUniqueWithoutDeviceInput>;

    @Field(() => [DeviceImageUpdateManyWithWhereWithoutDeviceInput], {nullable:true})
    updateMany?: Array<DeviceImageUpdateManyWithWhereWithoutDeviceInput>;

    @Field(() => [DeviceImageScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeviceImageScalarWhereInput>;
}
