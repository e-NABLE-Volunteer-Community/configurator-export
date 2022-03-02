import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithoutMeasurementSetDescriptionInput } from './device-update-without-measurement-set-description.input';

@InputType()
export class DeviceUpdateWithWhereUniqueWithoutMeasurementSetDescriptionInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    where!: DeviceWhereUniqueInput;

    @Field(() => DeviceUpdateWithoutMeasurementSetDescriptionInput, {nullable:false})
    data!: DeviceUpdateWithoutMeasurementSetDescriptionInput;
}
