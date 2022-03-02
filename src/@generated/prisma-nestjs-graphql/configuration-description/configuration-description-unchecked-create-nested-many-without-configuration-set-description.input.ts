import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput } from './configuration-description-create-without-configuration-set-description.input';
import { ConfigurationDescriptionCreateOrConnectWithoutConfigurationSetDescriptionInput } from './configuration-description-create-or-connect-without-configuration-set-description.input';
import { ConfigurationDescriptionCreateManyConfigurationSetDescriptionInputEnvelope } from './configuration-description-create-many-configuration-set-description-input-envelope.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';

@InputType()
export class ConfigurationDescriptionUncheckedCreateNestedManyWithoutConfigurationSetDescriptionInput {

    @Field(() => [ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput], {nullable:true})
    create?: Array<ConfigurationDescriptionCreateWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationDescriptionCreateOrConnectWithoutConfigurationSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<ConfigurationDescriptionCreateOrConnectWithoutConfigurationSetDescriptionInput>;

    @Field(() => ConfigurationDescriptionCreateManyConfigurationSetDescriptionInputEnvelope, {nullable:true})
    createMany?: ConfigurationDescriptionCreateManyConfigurationSetDescriptionInputEnvelope;

    @Field(() => [ConfigurationDescriptionWhereUniqueInput], {nullable:true})
    connect?: Array<ConfigurationDescriptionWhereUniqueInput>;
}
