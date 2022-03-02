import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionOverviewScalarWhereInput } from './configuration-set-description-overview-scalar-where.input';
import { ConfigurationSetDescriptionOverviewUpdateManyMutationInput } from './configuration-set-description-overview-update-many-mutation.input';

@InputType()
export class ConfigurationSetDescriptionOverviewUpdateManyWithWhereWithoutConfigurationSetDescriptionInput {

    @Field(() => ConfigurationSetDescriptionOverviewScalarWhereInput, {nullable:false})
    where!: ConfigurationSetDescriptionOverviewScalarWhereInput;

    @Field(() => ConfigurationSetDescriptionOverviewUpdateManyMutationInput, {nullable:false})
    data!: ConfigurationSetDescriptionOverviewUpdateManyMutationInput;
}
