import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionUpdateManyMutationInput } from './configuration-description-update-many-mutation.input';
import { ConfigurationDescriptionWhereInput } from './configuration-description-where.input';

@ArgsType()
export class UpdateManyConfigurationDescriptionArgs {

    @Field(() => ConfigurationDescriptionUpdateManyMutationInput, {nullable:false})
    data!: ConfigurationDescriptionUpdateManyMutationInput;

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    where?: ConfigurationDescriptionWhereInput;
}
