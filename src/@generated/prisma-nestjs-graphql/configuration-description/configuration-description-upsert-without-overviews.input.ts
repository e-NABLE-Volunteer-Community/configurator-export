import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionUpdateWithoutOverviewsInput } from './configuration-description-update-without-overviews.input';
import { ConfigurationDescriptionCreateWithoutOverviewsInput } from './configuration-description-create-without-overviews.input';

@InputType()
export class ConfigurationDescriptionUpsertWithoutOverviewsInput {

    @Field(() => ConfigurationDescriptionUpdateWithoutOverviewsInput, {nullable:false})
    update!: ConfigurationDescriptionUpdateWithoutOverviewsInput;

    @Field(() => ConfigurationDescriptionCreateWithoutOverviewsInput, {nullable:false})
    create!: ConfigurationDescriptionCreateWithoutOverviewsInput;
}
