import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateNestedOneWithoutDeviceOverviewsInput } from '../device/device-create-nested-one-without-device-overviews.input';

@InputType()
export class DeviceOverviewCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => DeviceCreateNestedOneWithoutDeviceOverviewsInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutDeviceOverviewsInput;
}
