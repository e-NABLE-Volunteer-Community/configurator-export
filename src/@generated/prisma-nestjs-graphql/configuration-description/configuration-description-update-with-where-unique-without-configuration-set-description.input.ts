import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionUpdateWithoutConfigurationSetDescriptionInput } from './configuration-description-update-without-configuration-set-description.input';

@InputType()
export class ConfigurationDescriptionUpdateWithWhereUniqueWithoutConfigurationSetDescriptionInput {

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => ConfigurationDescriptionUpdateWithoutConfigurationSetDescriptionInput, {nullable:false})
    data!: ConfigurationDescriptionUpdateWithoutConfigurationSetDescriptionInput;
}
