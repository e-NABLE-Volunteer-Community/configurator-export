import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionCreateInput } from './configuration-set-description-create.input';
import { ConfigurationSetDescriptionUpdateInput } from './configuration-set-description-update.input';

@ArgsType()
export class UpsertOneConfigurationSetDescriptionArgs {

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionCreateInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateInput;

    @Field(() => ConfigurationSetDescriptionUpdateInput, {nullable:false})
    update!: ConfigurationSetDescriptionUpdateInput;
}
