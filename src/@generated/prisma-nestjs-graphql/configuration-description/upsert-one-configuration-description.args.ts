import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionCreateInput } from './configuration-description-create.input';
import { ConfigurationDescriptionUpdateInput } from './configuration-description-update.input';

@ArgsType()
export class UpsertOneConfigurationDescriptionArgs {

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => ConfigurationDescriptionCreateInput, {nullable:false})
    create!: ConfigurationDescriptionCreateInput;

    @Field(() => ConfigurationDescriptionUpdateInput, {nullable:false})
    update!: ConfigurationDescriptionUpdateInput;
}
