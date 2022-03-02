import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionUpdateWithoutConfigurationsInput } from './configuration-set-description-update-without-configurations.input';
import { ConfigurationSetDescriptionCreateWithoutConfigurationsInput } from './configuration-set-description-create-without-configurations.input';

@InputType()
export class ConfigurationSetDescriptionUpsertWithoutConfigurationsInput {

    @Field(() => ConfigurationSetDescriptionUpdateWithoutConfigurationsInput, {nullable:false})
    update!: ConfigurationSetDescriptionUpdateWithoutConfigurationsInput;

    @Field(() => ConfigurationSetDescriptionCreateWithoutConfigurationsInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateWithoutConfigurationsInput;
}
