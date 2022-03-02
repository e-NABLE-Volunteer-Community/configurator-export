import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorCreateWithoutDeviceInput } from './device-author-create-without-device.input';
import { DeviceAuthorCreateOrConnectWithoutDeviceInput } from './device-author-create-or-connect-without-device.input';
import { DeviceAuthorUpsertWithWhereUniqueWithoutDeviceInput } from './device-author-upsert-with-where-unique-without-device.input';
import { DeviceAuthorCreateManyDeviceInputEnvelope } from './device-author-create-many-device-input-envelope.input';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';
import { DeviceAuthorUpdateWithWhereUniqueWithoutDeviceInput } from './device-author-update-with-where-unique-without-device.input';
import { DeviceAuthorUpdateManyWithWhereWithoutDeviceInput } from './device-author-update-many-with-where-without-device.input';
import { DeviceAuthorScalarWhereInput } from './device-author-scalar-where.input';

@InputType()
export class DeviceAuthorUncheckedUpdateManyWithoutDeviceInput {

    @Field(() => [DeviceAuthorCreateWithoutDeviceInput], {nullable:true})
    create?: Array<DeviceAuthorCreateWithoutDeviceInput>;

    @Field(() => [DeviceAuthorCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<DeviceAuthorCreateOrConnectWithoutDeviceInput>;

    @Field(() => [DeviceAuthorUpsertWithWhereUniqueWithoutDeviceInput], {nullable:true})
    upsert?: Array<DeviceAuthorUpsertWithWhereUniqueWithoutDeviceInput>;

    @Field(() => DeviceAuthorCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: DeviceAuthorCreateManyDeviceInputEnvelope;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    set?: Array<DeviceAuthorWhereUniqueInput>;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    disconnect?: Array<DeviceAuthorWhereUniqueInput>;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    delete?: Array<DeviceAuthorWhereUniqueInput>;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceAuthorWhereUniqueInput>;

    @Field(() => [DeviceAuthorUpdateWithWhereUniqueWithoutDeviceInput], {nullable:true})
    update?: Array<DeviceAuthorUpdateWithWhereUniqueWithoutDeviceInput>;

    @Field(() => [DeviceAuthorUpdateManyWithWhereWithoutDeviceInput], {nullable:true})
    updateMany?: Array<DeviceAuthorUpdateManyWithWhereWithoutDeviceInput>;

    @Field(() => [DeviceAuthorScalarWhereInput], {nullable:true})
    deleteMany?: Array<DeviceAuthorScalarWhereInput>;
}
