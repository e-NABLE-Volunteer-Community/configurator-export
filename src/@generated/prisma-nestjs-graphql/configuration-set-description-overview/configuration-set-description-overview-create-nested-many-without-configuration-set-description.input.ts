import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-create-without-configuration-set-description.input';
import { ConfigurationSetDescriptionOverviewCreateOrConnectWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-create-or-connect-without-configuration-set-description.input';
import { ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInputEnvelope } from './configuration-set-description-overview-create-many-configuration-set-description-input-envelope.input';
import { ConfigurationSetDescriptionOverviewWhereUniqueInput } from './configuration-set-description-overview-where-unique.input';

@InputType()
export class ConfigurationSetDescriptionOverviewCreateNestedManyWithoutConfigurationSetDescriptionInput {

    @Field(() => [ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput], {nullable:true})
    create?: Array<ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput>;

    @Field(() => [ConfigurationSetDescriptionOverviewCreateOrConnectWithoutConfigurationSetDescriptionInput], {nullable:true})
    connectOrCreate?: Array<ConfigurationSetDescriptionOverviewCreateOrConnectWithoutConfigurationSetDescriptionInput>;

    @Field(() => ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInputEnvelope, {nullable:true})
    createMany?: ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInputEnvelope;

    @Field(() => [ConfigurationSetDescriptionOverviewWhereUniqueInput], {nullable:true})
    connect?: Array<ConfigurationSetDescriptionOverviewWhereUniqueInput>;
}
