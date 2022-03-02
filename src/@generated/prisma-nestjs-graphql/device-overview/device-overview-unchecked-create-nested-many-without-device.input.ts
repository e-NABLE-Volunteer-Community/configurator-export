import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceOverviewCreateWithoutDeviceInput } from './device-overview-create-without-device.input';
import { DeviceOverviewCreateOrConnectWithoutDeviceInput } from './device-overview-create-or-connect-without-device.input';
import { DeviceOverviewCreateManyDeviceInputEnvelope } from './device-overview-create-many-device-input-envelope.input';
import { DeviceOverviewWhereUniqueInput } from './device-overview-where-unique.input';

@InputType()
export class DeviceOverviewUncheckedCreateNestedManyWithoutDeviceInput {

    @Field(() => [DeviceOverviewCreateWithoutDeviceInput], {nullable:true})
    create?: Array<DeviceOverviewCreateWithoutDeviceInput>;

    @Field(() => [DeviceOverviewCreateOrConnectWithoutDeviceInput], {nullable:true})
    connectOrCreate?: Array<DeviceOverviewCreateOrConnectWithoutDeviceInput>;

    @Field(() => DeviceOverviewCreateManyDeviceInputEnvelope, {nullable:true})
    createMany?: DeviceOverviewCreateManyDeviceInputEnvelope;

    @Field(() => [DeviceOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<DeviceOverviewWhereUniqueInput>;
}
