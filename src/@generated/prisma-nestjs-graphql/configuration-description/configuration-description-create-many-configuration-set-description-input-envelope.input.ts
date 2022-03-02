import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateManyConfigurationSetDescriptionInput } from './configuration-description-create-many-configuration-set-description.input';

@InputType()
export class ConfigurationDescriptionCreateManyConfigurationSetDescriptionInputEnvelope {

    @Field(() => [ConfigurationDescriptionCreateManyConfigurationSetDescriptionInput], {nullable:false})
    data!: Array<ConfigurationDescriptionCreateManyConfigurationSetDescriptionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
