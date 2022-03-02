import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';
import { ConfigurationDescriptionCreateWithoutOverviewsInput } from './configuration-description-create-without-overviews.input';

@InputType()
export class ConfigurationDescriptionCreateOrConnectWithoutOverviewsInput {

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionWhereUniqueInput;

    @Field(() => ConfigurationDescriptionCreateWithoutOverviewsInput, {nullable:false})
    create!: ConfigurationDescriptionCreateWithoutOverviewsInput;
}
