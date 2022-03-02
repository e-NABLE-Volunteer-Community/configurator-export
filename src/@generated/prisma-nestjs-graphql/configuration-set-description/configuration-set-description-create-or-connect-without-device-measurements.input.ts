import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput } from './configuration-set-description-create-without-device-measurements.input';

@InputType()
export class ConfigurationSetDescriptionCreateOrConnectWithoutDeviceMeasurementsInput {

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateWithoutDeviceMeasurementsInput;
}
