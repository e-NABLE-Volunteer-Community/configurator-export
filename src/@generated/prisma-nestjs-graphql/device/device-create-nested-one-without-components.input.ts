import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutComponentsInput } from './device-create-without-components.input';
import { DeviceCreateOrConnectWithoutComponentsInput } from './device-create-or-connect-without-components.input';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedOneWithoutComponentsInput {

    @Field(() => DeviceCreateWithoutComponentsInput, {nullable:true})
    create?: DeviceCreateWithoutComponentsInput;

    @Field(() => DeviceCreateOrConnectWithoutComponentsInput, {nullable:true})
    connectOrCreate?: DeviceCreateOrConnectWithoutComponentsInput;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    connect?: DeviceWhereUniqueInput;
}
