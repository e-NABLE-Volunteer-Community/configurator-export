import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateWithoutComponentsInput } from './device-update-without-components.input';
import { DeviceCreateWithoutComponentsInput } from './device-create-without-components.input';

@InputType()
export class DeviceUpsertWithoutComponentsInput {

    @Field(() => DeviceUpdateWithoutComponentsInput, {nullable:false})
    update!: DeviceUpdateWithoutComponentsInput;

    @Field(() => DeviceCreateWithoutComponentsInput, {nullable:false})
    create!: DeviceCreateWithoutComponentsInput;
}
