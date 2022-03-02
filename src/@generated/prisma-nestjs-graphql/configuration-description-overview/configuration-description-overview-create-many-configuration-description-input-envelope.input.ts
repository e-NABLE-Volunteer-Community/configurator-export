import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInput } from './configuration-description-overview-create-many-configuration-description.input';

@InputType()
export class ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInputEnvelope {

    @Field(() => [ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInput], {nullable:false})
    data!: Array<ConfigurationDescriptionOverviewCreateManyConfigurationDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
