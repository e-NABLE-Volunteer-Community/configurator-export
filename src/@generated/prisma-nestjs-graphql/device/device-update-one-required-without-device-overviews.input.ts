import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceOverviewsInput } from './device-create-without-device-overviews.input';
import { DeviceCreateOrConnectWithoutDeviceOverviewsInput } from './device-create-or-connect-without-device-overviews.input';
import { DeviceUpsertWithoutDeviceOverviewsInput } from './device-upsert-without-device-overviews.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithoutDeviceOverviewsInput } from './device-update-without-device-overviews.input';

@InputType()
export class DeviceUpdateOneRequiredWithoutDeviceOverviewsInput {

    @Field(() => DeviceCreateWithoutDeviceOverviewsInput, {nullable:true})
    create?: DeviceCreateWithoutDeviceOverviewsInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceOverviewsInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceOverviewsInput;

    @Field(() => DeviceUpsertWithoutDeviceOverviewsInput, {nullable:true})
    upsert?: DeviceUpsertWithoutDeviceOverviewsInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;

    @Field(() => DeviceUpdateWithoutDeviceOverviewsInput, {nullable:true})
    update?: DeviceUpdateWithoutDeviceOverviewsInput;
}
