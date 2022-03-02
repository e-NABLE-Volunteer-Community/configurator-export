import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionCreateWithoutPairingsInput } from './configuration-description-create-without-pairings.input';

@InputType()
export class ConfigurationDescriptionCreateOrConnectWithoutPairingsInput {

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => ConfigurationDescriptionCreateWithoutPairingsInput, {nullable:false})
    create!: ConfigurationDescriptionCreateWithoutPairingsInput;
}
