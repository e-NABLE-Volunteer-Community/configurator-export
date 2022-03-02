import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceCreateWithoutComponentsInput } from './device-create-without-components.input';

@InputType()
export class DeviceCreateOrConnectWithoutComponentsInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceCreateWithoutComponentsInput, {nullable:false})
    create!: DeviceCreateWithoutComponentsInput;
}
