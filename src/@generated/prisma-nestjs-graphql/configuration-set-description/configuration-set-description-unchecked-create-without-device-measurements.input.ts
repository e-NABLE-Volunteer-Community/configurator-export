import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput } from '../configuration-set-description-overview/configuration-set-description-overview-unchecked-create-nested-many-without-configuration-set-description.input';
import { ConfigurationDescriptionUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput } from '../configuration-description/configuration-description-unchecked-create-nested-many-without-configuration-set-description.input';
import { DeviceUncheckedCreateNestedManyWithoutOptionSetDescriptionInput } from '../device/device-unchecked-create-nested-many-without-option-set-description.input';

@InputType()
export class ConfigurationSetDescriptionUncheckedCreateWithoutDeviceMeasurementsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ConfigurationSetDescriptionOverviewUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    overviews?: ConfigurationSetDescriptionOverviewUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput;

    @Field(() => ConfigurationDescriptionUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput, {nullable:true})
    configurations?: ConfigurationDescriptionUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput;

    @Field(() => DeviceUncheckedCreateNestedManyWithoutOptionSetDescriptionInput, {nullable:true})
    deviceOptions?: DeviceUncheckedCreateNestedManyWithoutOptionSetDescriptionInput;
}
