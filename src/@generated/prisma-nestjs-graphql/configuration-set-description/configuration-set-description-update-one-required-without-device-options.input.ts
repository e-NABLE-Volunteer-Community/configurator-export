import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput } from './configuration-set-description-create-without-device-options.input';
import { ConfigurationSetDescriptionCreateOrConnectWithoutDeviceOptionsInput } from './configuration-set-description-create-or-connect-without-device-options.input';
import { ConfigurationSetDescriptionUpsertWithoutDeviceOptionsInput } from './configuration-set-description-upsert-without-device-options.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionUpdateWithoutDeviceOptionsInput } from './configuration-set-description-update-without-device-options.input';

@InputType()
export class ConfigurationSetDescriptionUpdateOneRequiredWithoutDeviceOptionsInput {

    @Field(() => ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput, {nullable:true})
    create?: ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput;

    @Field(() => ConfigurationSetDescriptionCreateOrConnectWithoutDeviceOptionsInput, {nullable:true})
    connectOrCreate?: ConfigurationSetDescriptionCreateOrConnectWithoutDeviceOptionsInput;

    @Field(() => ConfigurationSetDescriptionUpsertWithoutDeviceOptionsInput, {nullable:true})
    upsert?: ConfigurationSetDescriptionUpsertWithoutDeviceOptionsInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionUpdateWithoutDeviceOptionsInput, {nullable:true})
    update?: ConfigurationSetDescriptionUpdateWithoutDeviceOptionsInput;
}
