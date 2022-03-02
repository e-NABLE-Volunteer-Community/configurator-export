import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionUpdateWithoutDeviceOptionsInput } from './configuration-set-description-update-without-device-options.input';
import { ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput } from './configuration-set-description-create-without-device-options.input';

@InputType()
export class ConfigurationSetDescriptionUpsertWithoutDeviceOptionsInput {

    @Field(() => ConfigurationSetDescriptionUpdateWithoutDeviceOptionsInput, {nullable:false})
    update!: ConfigurationSetDescriptionUpdateWithoutDeviceOptionsInput;

    @Field(() => ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput;
}
