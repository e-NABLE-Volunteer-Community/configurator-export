import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateWithoutPairingsInput } from './configuration-description-create-without-pairings.input';
import { ConfigurationDescriptionCreateOrConnectWithoutPairingsInput } from './configuration-description-create-or-connect-without-pairings.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';

@InputType()
export class ConfigurationDescriptionCreateNestedOneWithoutPairingsInput {

    @Field(() => ConfigurationDescriptionCreateWithoutPairingsInput, {nullable:true})
    create?: ConfigurationDescriptionCreateWithoutPairingsInput;

    @Field(() => ConfigurationDescriptionCreateOrConnectWithoutPairingsInput, {nullable:true})
    connectOrCreate?: ConfigurationDescriptionCreateOrConnectWithoutPairingsInput;

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationDescriptionWhereUniqueInput;
}
