import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput } from './configuration-set-description-create-without-device-options.input';
import { ConfigurationSetDescriptionCreateOrConnectWithoutDeviceOptionsInput } from './configuration-set-description-create-or-connect-without-device-options.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';

@InputType()
export class ConfigurationSetDescriptionCreateNestedOneWithoutDeviceOptionsInput {

    @Field(() => ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput, {nullable:true})
    create?: ConfigurationSetDescriptionCreateWithoutDeviceOptionsInput;

    @Field(() => ConfigurationSetDescriptionCreateOrConnectWithoutDeviceOptionsInput, {nullable:true})
    connectOrCreate?: ConfigurationSetDescriptionCreateOrConnectWithoutDeviceOptionsInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationSetDescriptionWhereUniqueInput;
}
