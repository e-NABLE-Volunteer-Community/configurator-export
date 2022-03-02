import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionScalarWhereInput } from './configuration-description-scalar-where.input';
import { ConfigurationDescriptionUpdateManyMutationInput } from './configuration-description-update-many-mutation.input';

@InputType()
export class ConfigurationDescriptionUpdateManyWithWhereWithoutConfigurationSetDescriptionInput {

    @Field(() => ConfigurationDescriptionScalarWhereInput, {nullable:false})
    where!: ConfigurationDescriptionScalarWhereInput;

    @Field(() => ConfigurationDescriptionUpdateManyMutationInput, {nullable:false})
    data!: ConfigurationDescriptionUpdateManyMutationInput;
}
