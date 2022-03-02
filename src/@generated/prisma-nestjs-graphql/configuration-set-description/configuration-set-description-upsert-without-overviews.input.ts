import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionUpdateWithoutOverviewsInput } from './configuration-set-description-update-without-overviews.input';
import { ConfigurationSetDescriptionCreateWithoutOverviewsInput } from './configuration-set-description-create-without-overviews.input';

@InputType()
export class ConfigurationSetDescriptionUpsertWithoutOverviewsInput {

    @Field(() => ConfigurationSetDescriptionUpdateWithoutOverviewsInput, {nullable:false})
    update!: ConfigurationSetDescriptionUpdateWithoutOverviewsInput;

    @Field(() => ConfigurationSetDescriptionCreateWithoutOverviewsInput, {nullable:false})
    create!: ConfigurationSetDescriptionCreateWithoutOverviewsInput;
}
