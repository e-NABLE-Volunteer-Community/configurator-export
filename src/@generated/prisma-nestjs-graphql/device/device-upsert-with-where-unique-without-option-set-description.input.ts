import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithoutOptionSetDescriptionInput } from './device-update-without-option-set-description.input';
import { DeviceCreateWithoutOptionSetDescriptionInput } from './device-create-without-option-set-description.input';

@InputType()
export class DeviceUpsertWithWhereUniqueWithoutOptionSetDescriptionInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceUpdateWithoutOptionSetDescriptionInput, {nullable:false})
    update!: DeviceUpdateWithoutOptionSetDescriptionInput;

    @Field(() => DeviceCreateWithoutOptionSetDescriptionInput, {nullable:false})
    create!: DeviceCreateWithoutOptionSetDescriptionInput;
}
