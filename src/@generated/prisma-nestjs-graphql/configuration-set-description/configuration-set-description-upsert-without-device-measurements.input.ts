import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionUpdateWithoutDeviceMeasurementsInput } from './configuration-set-description-update-without-device-measurements.input';
import { ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput } from './configuration-set-description-create-without-device-measurements.input';

@InputType()
export class ConfigurationSetDescriptionUpsertWithoutDeviceMeasurementsInput {

    @Field(() => ConfigurationSetDescriptionUpdateWithoutDeviceMeasurementsInput, {nullable:false})
    update!: ConfigurationSetDescriptionUpdateWithoutDeviceMeasurementsInput;

    @Field(() => ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput;
}
