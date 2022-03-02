import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceExtrasInput } from './device-create-without-device-extras.input';
import { DeviceCreateOrConnectWithoutDeviceExtrasInput } from './device-create-or-connect-without-device-extras.input';
import { DeviceUpsertWithoutDeviceExtrasInput } from './device-upsert-without-device-extras.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithoutDeviceExtrasInput } from './device-update-without-device-extras.input';

@InputType()
export class DeviceUpdateOneRequiredWithoutDeviceExtrasInput {

    @Field(() => DeviceCreateWithoutDeviceExtrasInput, {nullable:true})
    create?: DeviceCreateWithoutDeviceExtrasInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceExtrasInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceExtrasInput;

    @Field(() => DeviceUpsertWithoutDeviceExtrasInput, {nullable:true})
    upsert?: DeviceUpsertWithoutDeviceExtrasInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;

    @Field(() => DeviceUpdateWithoutDeviceExtrasInput, {nullable:true})
    update?: DeviceUpdateWithoutDeviceExtrasInput;
}
