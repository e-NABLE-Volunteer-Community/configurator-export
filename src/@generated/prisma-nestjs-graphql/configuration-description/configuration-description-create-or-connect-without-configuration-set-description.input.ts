import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput } from './configuration-description-create-without-configuration-set-description.input';

@InputType()
export class ConfigurationDescriptionCreateOrConnectWithoutConfigurationSetDescriptionInput {

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput, {nullable:false})
    create!: ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput;
}
