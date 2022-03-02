import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionCreateWithoutConfigurationsInput } from './configuration-set-description-create-without-configurations.input';

@InputType()
export class ConfigurationSetDescriptionCreateOrConnectWithoutConfigurationsInput {

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionCreateWithoutConfigurationsInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateWithoutConfigurationsInput;
}
