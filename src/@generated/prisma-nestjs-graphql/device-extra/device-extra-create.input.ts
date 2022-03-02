import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { DeviceCreateNestedOneWithoutDeviceExtrasInput } from '../device/device-create-nested-one-without-device-extras.input';

@InputType()
export class DeviceExtraCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    location!: any;

    @Field(() => String, {nullable:false})
    exportLocation!: string;

    @Field(() => String, {nullable:true})
    locale?: string;

    @Field(() => DeviceCreateNestedOneWithoutDeviceExtrasInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutDeviceExtrasInput;
}
