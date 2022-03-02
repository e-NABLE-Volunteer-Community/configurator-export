import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceExtraCreateWithoutDeviceInput } from './device-extra-create-without-device.input';
import { DeviceExtraCreateOrConnectWithoutDeviceInput } from './device-extra-create-or-connect-without-device.input';
import { DeviceExtraCreateManyDeviceInputEnvelope } from './device-extra-create-many-device-input-envelope.input';
import { DeviceExtraWhereUniqueInput } from './device-extra-where-unique.input';

@InputType()
export class DeviceExtraUncheckedCreateNestedManyWithoutDeviceInput {

    @Field(() => [DeviceExtraCreateWithoutDeviceInput], {nullable:true})
    create?: Array<DeviceExtraCreateWithoutDeviceInput>;

    @Field(() => [DeviceExtraCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<DeviceExtraCreateOrConnectWithoutDeviceInput>;

    @Field(() => DeviceExtraCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: DeviceExtraCreateManyDeviceInputEnvelope;

    @Field(() => [DeviceExtraWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceExtraWhereUniqueInput>;
}
