import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithoutOptionSetDescriptionInput } from './device-update-without-option-set-description.input';

@InputType()
export class DeviceUpdateWithWhereUniqueWithoutOptionSetDescriptionInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceUpdateWithoutOptionSetDescriptionInput, {nullable:false})
    data!: DeviceUpdateWithoutOptionSetDescriptionInput;
}
