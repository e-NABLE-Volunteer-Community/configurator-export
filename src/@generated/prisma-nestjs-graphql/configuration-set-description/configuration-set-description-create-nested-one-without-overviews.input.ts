import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateWithoutOverviewsInput } from './configuration-set-description-create-without-overviews.input';
import { ConfigurationSetDescriptionCreateOrConnectWithoutOverviewsInput } from './configuration-set-description-create-or-connect-without-overviews.input';
import { ConfigurationSetDescriptionWhereUniqueInput } from './configuration-set-description-where-unique.input';

@InputType()
export class ConfigurationSetDescriptionCreateNestedOneWithoutOverviewsInput {

    @Field(() => ConfigurationSetDescriptionCreateWithoutOverviewsInput, {nullable:true})
    create?: ConfigurationSetDescriptionCreateWithoutOverviewsInput;

    @Field(() => ConfigurationSetDescriptionCreateOrConnectWithoutOverviewsInput, {nullable:true})
    connectOrCreate?: ConfigurationSetDescriptionCreateOrConnectWithoutOverviewsInput;

    @Field(() => ConfigurationSetDescriptionWhereUniqueInput, {nullable:true})
    connect?: ConfigurationSetDescriptionWhereUniqueInput;
}
