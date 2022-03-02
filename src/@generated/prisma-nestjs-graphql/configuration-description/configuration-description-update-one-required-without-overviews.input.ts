import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateWithoutOverviewsInput } from './configuration-description-create-without-overviews.input';
import { ConfigurationDescriptionCreateOrConnectWithoutOverviewsInput } from './configuration-description-create-or-connect-without-overviews.input';
import { ConfigurationDescriptionUpsertWithoutOverviewsInput } from './configuration-description-upsert-without-overviews.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionUpdateWithoutOverviewsInput } from './configuration-description-update-without-overviews.input';

@InputType()
export class ConfigurationDescriptionUpdateOneRequiredWithoutOverviewsInput {

    @Field(() => ConfigurationDescriptionCreateWithoutOverviewsInput, {nullable:true})
    create?: ConfigurationDescriptionCreateWithoutOverviewsInput;

    @Field(() => ConfigurationDescriptionCreateOrConnectWithoutOverviewsInput, {nullable:true})
    connectOrCreate?: ConfigurationDescriptionCreateOrConnectWithoutOverviewsInput;

    @Field(() => ConfigurationDescriptionUpsertWithoutOverviewsInput, {nullable:true})
    upsert?: ConfigurationDescriptionUpsertWithoutOverviewsInput;

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => ConfigurationDescriptionUpdateWithoutOverviewsInput, {nullable:true})
    update?: ConfigurationDescriptionUpdateWithoutOverviewsInput;
}
