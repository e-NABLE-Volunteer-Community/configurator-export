import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';
import { ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput } from './configuration-description-overview-create-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionOverviewCreateOrConnectWithoutConfigurationDescriptionInput {

    @Field(() => ConfigurationDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionOverviewWhereUniqueInput;

    @Field(() => ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput, {nullable:false})
    create!: ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput;
}
