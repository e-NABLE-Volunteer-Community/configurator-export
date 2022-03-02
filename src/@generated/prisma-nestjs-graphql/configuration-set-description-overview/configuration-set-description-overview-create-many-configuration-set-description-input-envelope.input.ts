import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInput } from './configuration-set-description-overview-create-many-configuration-set-description.input';

@InputType()
export class ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInputEnvelope {

    @Field(() => [ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInput], {nullable:false})
    data!: Array<ConfigurationSetDescriptionOverviewCreateManyConfigurationSetDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
