import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereUniqueInput } from './configuration-description-overview-where-unique.input';
import { ConfigurationDescriptionOverviewUpdateWithoutConfigurationDescriptionInput } from './configuration-description-overview-update-without-configuration-description.input';
import { ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput } from './configuration-description-overview-create-without-configuration-description.input';

@InputType()
export class ConfigurationDescriptionOverviewUpsertWithWhereUniqueWithoutConfigurationDescriptionInput {

    @Field(() => ConfigurationDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionOverviewWhereUniqueInput;

    @Field(() => ConfigurationDescriptionOverviewUpdateWithoutConfigurationDescriptionInput, {nullable:false})
    update!: ConfigurationDescriptionOverviewUpdateWithoutConfigurationDescriptionInput;

    @Field(() => ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput, {nullable:false})
    create!: ConfigurationDescriptionOverviewCreateWithoutConfigurationDescriptionInput;
}
