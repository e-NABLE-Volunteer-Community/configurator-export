import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionUpdateInput } from './configuration-set-description-update.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';

@ArgsType()
export class UpdateOneConfigurationSetDescriptionArgs {

    @Field(() => ConfigurationSetDescriptionUpdateInput, {nullable:false})
    data!: ConfigurationSetDescriptionUpdateInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationSetDescriptionWhereUniqueInput;
}
