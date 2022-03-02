import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateManyInput } from './configuration-set-description-create-many.input';

@ArgsType()
export class CreateManyConfigurationSetDescriptionArgs {

    @Field(() => [ConfigurationSetDescriptionCreateManyInput], {nullable:false})
    data!: Array<ConfigurationSetDescriptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
