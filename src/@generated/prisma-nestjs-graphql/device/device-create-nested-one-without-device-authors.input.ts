import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutDeviceAuthorsInput } from './device-create-without-device-authors.input';
import { DeviceCreateOrConnectWithoutDeviceAuthorsInput } from './device-create-or-connect-without-device-authors.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedOneWithoutDeviceAuthorsInput {

    @Field(() => DeviceCreateWithoutDeviceAuthorsInput, {nullable:true})
    create?: DeviceCreateWithoutDeviceAuthorsInput;

    @Field(() => DeviceCreateOrConnectWithoutDeviceAuthorsInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutDeviceAuthorsInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;
}
