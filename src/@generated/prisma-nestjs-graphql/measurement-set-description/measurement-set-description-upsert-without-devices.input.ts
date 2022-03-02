import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionUpdateWithoutDevicesInput } from './measurement-set-description-update-without-devices.input';
import { MeasurementSetDescriptionCreateWithoutDevicesInput } from './measurement-set-description-create-without-devices.input';

@InputType()
export class MeasurementSetDescriptionUpsertWithoutDevicesInput {

    @Field(() => MeasurementSetDescriptionUpdateWithoutDevicesInput, {nullable:false})
    update!: MeasurementSetDescriptionUpdateWithoutDevicesInput;

    @Field(() => MeasurementSetDescriptionCreateWithoutDevicesInput, {nullable:false})
    create!: MeasurementSetDescriptionCreateWithoutDevicesInput;
}
