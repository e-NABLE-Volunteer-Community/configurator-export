import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateWithoutPairingsInput } from './configuration-description-create-without-pairings.input';
import { ConfigurationDescriptionCreateOrConnectWithoutPairingsInput } from './configuration-description-create-or-connect-without-pairings.input';
import { ConfigurationDescriptionUpsertWithoutPairingsInput } from './configuration-description-upsert-without-pairings.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionUpdateWithoutPairingsInput } from './configuration-description-update-without-pairings.input';

@InputType()
export class ConfigurationDescriptionUpdateOneRequiredWithoutPairingsInput {

    @Field(() => ConfigurationDescriptionCreateWithoutPairingsInput, {nullable:true})
    create?: ConfigurationDescriptionCreateWithoutPairingsInput;

    @Field(() => ConfigurationDescriptionCreateOrConnectWithoutPairingsInput, {nullable:true})
    connectOrCreate?: ConfigurationDescriptionCreateOrConnectWithoutPairingsInput;

    @Field(() => ConfigurationDescriptionUpsertWithoutPairingsInput, {nullable:true})
    upsert?: ConfigurationDescriptionUpsertWithoutPairingsInput;

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => ConfigurationDescriptionUpdateWithoutPairingsInput, {nullable:true})
    update?: ConfigurationDescriptionUpdateWithoutPairingsInput;
}
