import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewUpdateManyMutationInput } from './configuration-set-description-overview-update-many-mutation.input';
import { ConfigurationSetDescriptionOverviewWhereInput } from './configuration-set-description-overview-where.input';

@ArgsType()
export class UpdateManyConfigurationSetDescriptionOverviewArgs {

    @Field(() => ConfigurationSetDescriptionOverviewUpdateManyMutationInput, {nullable:false})
    data!: ConfigurationSetDescriptionOverviewUpdateManyMutationInput;

    @Field(() => ConfigurationSetDescriptionOverviewWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionOverviewWhereInput;
}
