import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationDescriptionUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput } from '../configuration-description/configuration-description-unchecked-create-nested-many-without-configuration-set-description.input';
import { DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput } from '../device/device-unchecked-create-nested-many-without-measurement-set-description.input';
import { DeviceUncheckedCreateNestedManyWithoutOptionSetDescriptionInput } from '../device/device-unchecked-create-nested-many-without-option-set-description.input';

@InputType()
export class ConfigurationSetDescriptionUncheckedCreateWithoutOverviewsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ConfigurationDescriptionUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    configurations?: ConfigurationDescriptionUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput, {nullable:true})
    deviceMeasurements?: DeviceUncheckedCreateNestedManyWithoutMeasurementSetDescriptionInput;

    @Field(() => DeviceUncheckedCreateNestedManyWithoutOptionSetDescriptionInput, {nullable:true})
    deviceOptions?: DeviceUncheckedCreateNestedManyWithoutOptionSetDescriptionInput;
}
