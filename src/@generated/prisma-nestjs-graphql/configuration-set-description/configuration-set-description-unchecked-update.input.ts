import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ConfigurationSetDescriptionOverviewUncheckedUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-set-description-overview/configuration-set-description-overview-unchecked-update-many-without-configuration-set-description.input';
import { ConfigurationDescriptionUncheckedUpdateManyWithoutConfigurationSetDescriptionInput } from '../configuration-description/configuration-description-unchecked-update-many-without-configuration-set-description.input';
import { DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput } from '../device/device-unchecked-update-many-without-measurement-set-description.input';
import { DeviceUncheckedUpdateManyWithoutOptionSetDescriptionInput } from '../device/device-unchecked-update-many-without-option-set-description.input';

@InputType()
export class ConfigurationSetDescriptionUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => ConfigurationSetDescriptionOverviewUncheckedUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    overviews?: ConfigurationSetDescriptionOverviewUncheckedUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => ConfigurationDescriptionUncheckedUpdateManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    configurations?: ConfigurationDescriptionUncheckedUpdateManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    deviceMeasurements?: DeviceUncheckedUpdateManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUncheckedUpdateManyWithoutOptionSetDescriptionInput, {nullable:true})
    deviceOptions?: DeviceUncheckedUpdateManyWithoutOptionSetDescriptionInput;
}
