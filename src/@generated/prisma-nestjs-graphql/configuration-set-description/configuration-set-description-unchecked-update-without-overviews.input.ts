import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ConfigurationDescriptionUncheckedUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-description/configuration-description-unchecked-update-many-without-configuration-set-description.input';
import { DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-unchecked-update-many-without-measurement-set-description.input';
import { DeviceUncheckedUpdateManyWithoutOptionSetDescriptionInput } from '../device/device-unchecked-update-many-without-option-set-description.input';

@InputType()
export class ConfigurationSetDescriptionUncheckedUpdateWithoutOverviewsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => ConfigurationDescriptionUncheckedUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    configurations?: ConfigurationDescriptionUncheckedUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    deviceMeasurements?: DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUncheckedUpdateManyWithoutOptionSetDescriptionInput, {nullable:true})
    deviceOptions?: DeviceUncheckedUpdateManyWithoutOptionSetDescriptionInput;
}
