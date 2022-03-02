import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceCreateWithoutOptionSetDescriptionInput } from './device-create-without-option-set-description.input';

@InputType()
export class DeviceCreateOrConnectWithoutOptionSetDescriptionInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceCreateWithoutOptionSetDescriptionInput, {nullable:false})
    create!: DeviceCreateWithoutOptionSetDescriptionInput;
}
