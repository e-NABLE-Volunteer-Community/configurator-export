import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewUpdateManyMutationInput } from './configuration-description-overview-update-many-mutation.input';
import { ConfigurationDescriptionOverviewWhereInput } from './configuration-description-overview-where.input';

@ArgsType()
export class UpdateManyConfigurationDescriptionOverviewArgs {

    @Field(() => ConfigurationDescriptionOverviewUpdateManyMutationInput, {nullable:false})
    data!: ConfigurationDescriptionOverviewUpdateManyMutationInput;

    @Field(() => ConfigurationDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationDescriptionOverviewWhereInput;
}
