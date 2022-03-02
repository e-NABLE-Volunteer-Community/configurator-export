import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateWithoutOverviewsInput } from './configuration-description-create-without-overviews.input';
import { ConfigurationDescriptionCreateOrConnectWithoutOverviewsInput } from './configuration-description-create-or-connect-without-overviews.input';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';

@InputType()
export class ConfigurationDescriptionCreateNestedOneWithoutOverviewsInput {

    @Field(() => ConfigurationDescriptionCreateWithoutOverviewsInput, {nullable:true})
    create?: ConfigurationDescriptionCreateWithoutOverviewsInput;

    @Field(() => ConfigurationDescriptionCreateOrConnectWithoutOverviewsInput, {nullable:true})
    connectOrCreate?: ConfigurationDescriptionCreateOrConnectWithoutOverviewsInput;

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationDescriptionWhereUniqueInput;
}
