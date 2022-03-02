import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceCreateWithoutDeviceAuthorsInput } from './device-create-without-device-authors.input';

@InputType()
export class DeviceCreateOrConnectWithoutDeviceAuthorsInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceCreateWithoutDeviceAuthorsInput, {nullable:false})
    create!: DeviceCreateWithoutDeviceAuthorsInput;
}
