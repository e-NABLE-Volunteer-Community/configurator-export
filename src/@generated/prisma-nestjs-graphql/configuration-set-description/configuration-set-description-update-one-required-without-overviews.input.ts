import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateWithoutOverviewsInput } from './configuration-set-description-create-without-overviews.input';
import { ConfigurationSetDescriptionCreateOrConnectWithoutOverviewsInput } from './configuration-set-description-create-or-connect-without-overviews.input';
import { ConfigurationSetDescriptionUpsertWithoutOverviewsInput } from './configuration-set-description-upsert-without-overviews.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';
import { ConfigurationSetDescriptionUpdateWithoutOverviewsInput } from './configuration-set-description-update-without-overviews.input';

@InputType()
export class ConfigurationSetDescriptionUpdateOneRequiredWithoutOverviewsInput {

    @Field(() => ConfigurationSetDescriptionCreateWithoutOverviewsInput, {nullable:true})
    create?: ConfigurationSetDescriptionCreateWithoutOverviewsInput;

    @Field(() => ConfigurationSetDescriptionCreateOrConnectWithoutOverviewsInput, {nullable:true})
    connectOrCreate?: ConfigurationSetDescriptionCreateOrConnectWithoutOverviewsInput;

    @Field(() => ConfigurationSetDescriptionUpsertWithoutOverviewsInput, {nullable:true})
    upsert?: ConfigurationSetDescriptionUpsertWithoutOverviewsInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationSetDescriptionWhereUniqueInput;

    @Field(() => ConfigurationSetDescriptionUpdateWithoutOverviewsInput, {nullable:true})
    update?: ConfigurationSetDescriptionUpdateWithoutOverviewsInput;
}
