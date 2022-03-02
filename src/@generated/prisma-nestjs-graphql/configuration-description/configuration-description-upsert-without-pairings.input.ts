import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionUpdateWithoutPairingsInput } from './configuration-description-update-without-pairings.input';
import { ConfigurationDescriptionCreateWithoutPairingsInput } from './configuration-description-create-without-pairings.input';

@InputType()
export class ConfigurationDescriptionUpsertWithoutPairingsInput {

    @Field(() => ConfigurationDescriptionUpdateWithoutPairingsInput, {nullable:false})
    update!: ConfigurationDescriptionUpdateWithoutPairingsInput;

    @Field(() => ConfigurationDescriptionCreateWithoutPairingsInput, {nullable:false})
    create!: ConfigurationDescriptionCreateWithoutPairingsInput;
}
