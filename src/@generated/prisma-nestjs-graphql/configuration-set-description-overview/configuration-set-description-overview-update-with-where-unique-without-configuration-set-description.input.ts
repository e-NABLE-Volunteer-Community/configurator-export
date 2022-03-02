import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewWhereUniqueInput } from './configuration-set-description-overview-where-unique.input';
import { ConfigurationSetDescriptionOverviewUpdateWithoutConfigurationSetDescriptionInput } from './configuration-set-description-overview-update-without-configuration-set-description.input';

@InputType()
export class ConfigurationSetDescriptionOverviewUpdateWithWhereUniqueWithoutConfigurationSetDescriptionInput {

    @Field(() => ConfigurationSetDescriptionOverviewWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionOverviewWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionOverviewUpdateWithoutConfigurationSetDescriptionInput, {nullable:false})
    data!: ConfigurationSetDescriptionOverviewUpdateWithoutConfigurationSetDescriptionInput;
}
