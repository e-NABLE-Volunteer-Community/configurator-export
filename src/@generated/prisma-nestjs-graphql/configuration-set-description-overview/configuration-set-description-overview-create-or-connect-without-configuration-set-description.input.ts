import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereUniqueInput } from './configuration-set-description-overview-where-unique.input';
import { ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-create-without-configuration-set-description.input';

@InputType()
export class ConfigurationSetDescriptionOverviewCreateOrConnectWithoutConfigurationSetDescriptionInput {

    @Field(() => ConfigurationSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionOverviewWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput, {nullable:false})
    create!: ConfigurationSetDescriptionOverviewCreateWithoutConfigurationSetDescriptionInput;
}
