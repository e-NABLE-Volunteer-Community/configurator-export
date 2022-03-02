import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionUpdateInput } from './configuration-description-update.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';

@ArgsType()
export class UpdateOneConfigurationDescriptionArgs {

    @Field(() => ConfigurationDescriptionUpdateInput, {nullable:false})
    data!: ConfigurationDescriptionUpdateInput;

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionWhereUniqueInput;
}
