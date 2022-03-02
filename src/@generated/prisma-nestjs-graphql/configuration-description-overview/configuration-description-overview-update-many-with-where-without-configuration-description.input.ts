import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewScalarWhereInput } from './configuration-description-overview-scalar-where.input';
import { ConfigurationDescriptionOverviewUpdateManyMutationInput } from './configuration-description-overview-update-many-mutation.input';

@InputType()
export class ConfigurationDescriptionOverviewUpdateManyWithWhereWithoutConfigurationDescriptionInput {

    @Field(() => ConfigurationDescriptionOverviewScalarWhereInput, {nullable:false})
    where!: ConfigurationDescriptionOverviewScalarWhereInput;

    @Field(() => ConfigurationDescriptionOverviewUpdateManyMutationInput, {nullable:false})
    data!: ConfigurationDescriptionOverviewUpdateManyMutationInput;
}
