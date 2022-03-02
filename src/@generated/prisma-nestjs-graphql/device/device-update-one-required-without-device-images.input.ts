import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceImagesInput } from './device-create-without-device-images.input';
import { DeviceCreateOrConnectWithoutDeviceImagesInput } from './device-create-or-connect-without-device-images.input';
import { DeviceUpsertWithoutDeviceImagesInput } from './device-upsert-without-device-images.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithoutDeviceImagesInput } from './device-update-without-device-images.input';

@InputType()
export class DeviceUpdateOneRequiredWithoutDeviceImagesInput {

    @Field(() => DeviceCreateWithoutDeviceImagesInput, {nullable:true})
    create?: DeviceCreateWithoutDeviceImagesInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceImagesInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceImagesInput;

    @Field(() => DeviceUpsertWithoutDeviceImagesInput, {nullable:true})
    upsert?: DeviceUpsertWithoutDeviceImagesInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;

    @Field(() => DeviceUpdateWithoutDeviceImagesInput, {nullable:true})
    update?: DeviceUpdateWithoutDeviceImagesInput;
}
