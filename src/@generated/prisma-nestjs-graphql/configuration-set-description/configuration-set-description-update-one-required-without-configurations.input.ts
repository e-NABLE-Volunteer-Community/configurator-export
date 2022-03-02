import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateWithoutConfigurationsInput } from './configuration-set-description-create-without-configurations.input';
import { ConfigurationSetDescriptionCreateOrConnectWithoutConfigurationsInput } from './configuration-set-description-create-or-connect-without-configurations.input';
import { ConfigurationSetDescriptionUpsertWithoutConfigurationsInput } from './configuration-set-description-upsert-without-configurations.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionUpdateWithoutConfigurationsInput } from './configuration-set-description-update-without-configurations.input';

@InputType()
export class ConfigurationSetDescriptionUpdateOneRequiredWithoutConfigurationsInput {

    @Field(() => ConfigurationSetDescriptionCreateWithoutConfigurationsInput, {nullable:true})
    create?: ConfigurationSetDescriptionCreateWithoutConfigurationsInput;

    @Field(() => ConfigurationSetDescriptionCreateOrConnectWithoutConfigurationsInput, {nullable:true})
    connectOrCreate?: ConfigurationSetDescriptionCreateOrConnectWithoutConfigurationsInput;

    @Field(() => ConfigurationSetDescriptionUpsertWithoutConfigurationsInput, {nullable:true})
    upsert?: ConfigurationSetDescriptionUpsertWithoutConfigurationsInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionUpdateWithoutConfigurationsInput, {nullable:true})
    update?: ConfigurationSetDescriptionUpdateWithoutConfigurationsInput;
}
