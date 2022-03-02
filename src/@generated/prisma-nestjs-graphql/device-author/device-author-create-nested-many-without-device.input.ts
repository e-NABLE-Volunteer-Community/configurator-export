import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceAuthorCreateWithoutDeviceInput } from './device-author-create-without-device.input';
import { DeviceAuthorCreateOrConnectWithoutDeviceInput } from './device-author-create-or-connect-without-device.input';
import { DeviceAuthorCreateManyDeviceInputEnvelope } from './device-author-create-many-device-input-envelope.input';
import { DeviceAuthorWhereUniqueInput } from './device-author-where-unique.input';

@InputType()
export class DeviceAuthorCreateNestedManyWithoutDeviceInput {

    @Field(() => [DeviceAuthorCreateWithoutDeviceInput], {nullable:true})
    create?: Array<DeviceAuthorCreateWithoutDeviceInput>;

    @Field(() => [DeviceAuthorCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<DeviceAuthorCreateOrConnectWithoutDeviceInput>;

    @Field(() => DeviceAuthorCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: DeviceAuthorCreateManyDeviceInputEnvelope;

    @Field(() => [DeviceAuthorWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceAuthorWhereUniqueInput>;
}
