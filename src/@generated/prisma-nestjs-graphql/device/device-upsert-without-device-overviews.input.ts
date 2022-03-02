import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateWithoutDeviceOverviewsInput } from './device-update-without-device-overviews.input';
import { DeviceCreateWithoutDeviceOverviewsInput } from './device-create-without-device-overviews.input';

@InputType()
export class DeviceUpsertWithoutDeviceOverviewsInput {

    @Field(() => DeviceUpdateWithoutDeviceOverviewsInput, {nullable:false})
    update!: DeviceUpdateWithoutDeviceOverviewsInput;

    @Field(() => DeviceCreateWithoutDeviceOverviewsInput, {nullable:false})
    create!: DeviceCreateWithoutDeviceOverviewsInput;
}
