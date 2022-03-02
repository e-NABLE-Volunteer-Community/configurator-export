import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceAuthorsInput } from './device-create-without-device-authors.input';
import { DeviceCreateOrConnectWithoutDeviceAuthorsInput } from './device-create-or-connect-without-device-authors.input';
import { DeviceUpsertWithoutDeviceAuthorsInput } from './device-upsert-without-device-authors.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithoutDeviceAuthorsInput } from './device-update-without-device-authors.input';

@InputType()
export class DeviceUpdateOneRequiredWithoutDeviceAuthorsInput {

    @Field(() => DeviceCreateWithoutDeviceAuthorsInput, {nullable:true})
    create?: DeviceCreateWithoutDeviceAuthorsInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceAuthorsInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceAuthorsInput;

    @Field(() => DeviceUpsertWithoutDeviceAuthorsInput, {nullable:true})
    upsert?: DeviceUpsertWithoutDeviceAuthorsInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;

    @Field(() => DeviceUpdateWithoutDeviceAuthorsInput, {nullable:true})
    update?: DeviceUpdateWithoutDeviceAuthorsInput;
}
