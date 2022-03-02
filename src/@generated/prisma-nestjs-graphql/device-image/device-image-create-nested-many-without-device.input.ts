import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceImageCreateWithoutDeviceInput } from './device-image-create-without-device.input';
import { DeviceImageCreateOrConnectWithoutDeviceInput } from './device-image-create-or-connect-without-device.input';
import { DeviceImageCreateManyDeviceInputEnvelope } from './device-image-create-many-device-input-envelope.input';
import { DeviceImageWhereUniqueInput } from './device-image-where-unique.input';

@InputType()
export class DeviceImageCreateNestedManyWithoutDeviceInput {

    @Field(() => [DeviceImageCreateWithoutDeviceInput], {nullable:true})
    create?: Array<DeviceImageCreateWithoutDeviceInput>;

    @Field(() => [DeviceImageCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<DeviceImageCreateOrConnectWithoutDeviceInput>;

    @Field(() => DeviceImageCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: DeviceImageCreateManyDeviceInputEnvelope;

    @Field(() => [DeviceImageWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceImageWhereUniqueInput>;
}
