import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput } from './configuration-set-description-create-without-device-measurements.input';
import { ConfigurationSetDescriptionCreateOrConnectWithoutDeviceMeasurementsInput } from './configuration-set-description-create-or-connect-without-device-measurements.input';
import { ConfigurationSetDescriptionUpsertWithoutDeviceMeasurementsInput } from './configuration-set-description-upsert-without-device-measurements.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionUpdateWithoutDeviceMeasurementsInput } from './configuration-set-description-update-without-device-measurements.input';

@InputType()
export class ConfigurationSetDescriptionUpdateOneRequiredWithoutDeviceMeasurementsInput {

    @Field(() => ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput, {nullable:true})
    create?: ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput;

    @Field(() => ConfigurationSetDescriptionCreateOrConnectWithoutDeviceMeasurementsInput, {nullable:true})
    connectOrCreate?: ConfigurationSetDescriptionCreateOrConnectWithoutDeviceMeasurementsInput;

    @Field(() => ConfigurationSetDescriptionUpsertWithoutDeviceMeasurementsInput, {nullable:true})
    upsert?: ConfigurationSetDescriptionUpsertWithoutDeviceMeasurementsInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionUpdateWithoutDeviceMeasurementsInput, {nullable:true})
    update?: ConfigurationSetDescriptionUpdateWithoutDeviceMeasurementsInput;
}
