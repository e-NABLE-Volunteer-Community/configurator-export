import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput } from './configuration-set-description-create-without-device-measurements.input';
import { ConfigurationSetDescriptionCreateOrConnectWithoutDeviceMeasurementsInput } from './configuration-set-description-create-or-connect-without-device-measurements.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';

@InputType()
export class ConfigurationSetDescriptionCreateNestedOneWithoutDeviceMeasurementsInput {

    @Field(() => ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput, {nullable:true})
    create?: ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput;

    @Field(() => ConfigurationSetDescriptionCreateOrConnectWithoutDeviceMeasurementsInput, {nullable:true})
    connectOrCreate?: ConfigurationSetDescriptionCreateOrConnectWithoutDeviceMeasurementsInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationSetDescriptionWhereUniqueInput;
}
