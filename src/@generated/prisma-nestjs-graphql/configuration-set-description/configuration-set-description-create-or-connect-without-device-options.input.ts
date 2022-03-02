import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput } from './configuration-set-description-create-without-device-options.input';

@InputType()
export class ConfigurationSetDescriptionCreateOrConnectWithoutDeviceOptionsInput {

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput;
}
