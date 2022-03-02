import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateManyInput } from './configuration-description-create-many.input';

@ArgsType()
export class CreateManyConfigurationDescriptionArgs {

    @Field(() => [ConfigurationDescriptionCreateManyInput], {nullable:false})
    data!: Array<ConfigurationDescriptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
