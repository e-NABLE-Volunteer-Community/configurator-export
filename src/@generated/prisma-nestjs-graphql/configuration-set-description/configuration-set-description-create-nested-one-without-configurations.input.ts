import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateWithoutConfigurationsInput } from './configuration-set-description-create-without-configurations.input';
import { ConfigurationSetDescriptionCreateOrConnectWithoutConfigurationsInput } from './configuration-set-description-create-or-connect-without-configurations.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';

@InputType()
export class ConfigurationSetDescriptionCreateNestedOneWithoutConfigurationsInput {

    @Field(() => ConfigurationSetDescriptionCreateWithoutConfigurationsInput, {nullable:true})
    create?: ConfigurationSetDescriptionCreateWithoutConfigurationsInput;

    @Field(() => ConfigurationSetDescriptionCreateOrConnectWithoutConfigurationsInput, {nullable:true})
    connectOrCreate?: ConfigurationSetDescriptionCreateOrConnectWithoutConfigurationsInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationSetDescriptionWhereUniqueInput;
}
