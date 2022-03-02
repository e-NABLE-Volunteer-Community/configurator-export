import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionUpdateWithoutConfigurationSetDescriptionInput } from './configuration-description-update-without-configuration-set-description.input';
import { ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput } from './configuration-description-create-without-configuration-set-description.input';

@InputType()
export class ConfigurationDescriptionUpsertWithWhereUniqueWithoutConfigurationSetDescriptionInput {

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => ConfigurationDescriptionUpdateWithoutConfigurationSetDescriptionInput, {nullable:false})
    update!: ConfigurationDescriptionUpdateWithoutConfigurationSetDescriptionInput;

    @Field(() => ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput, {nullable:false})
    create!: ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput;
}
