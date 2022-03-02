import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput } from './configuration-description-overview-create-without-configuration-description.input';
import { ConfigurationDescriptionOverviewCreateOrConnectWithoutConfigurationDescriptionInput } from './configuration-description-overview-create-or-connect-without-configuration-description.input';
import { ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInputEnvelope } from './configuration-description-overview-create-many-configuration-description-input-envelope.input';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';

@InputType()
export class ConfigurationDescriptionOverviewCreateNestedManyWithoutConfigurationDescriptionInput {

    @Field(() => [ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput], {nullable:true})
    create?: Array<ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput>;

    @Field(() => [ConfigurationDescriptionOverviewCreateOrConnectWithoutConfigurationDescriptionInput], {nullable:true})
    connectOrCreate?: Array<ConfigurationDescriptionOverviewCreateOrConnectWithoutConfigurationDescriptionInput>;

    @Field(() => ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInputEnvelope, {nullable:true})
    createMany?: ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInputEnvelope;

    @Field(() => [ConfigurationDescriptionOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<ConfigurationDescriptionOverviewWhereUniqueInput>;
}
