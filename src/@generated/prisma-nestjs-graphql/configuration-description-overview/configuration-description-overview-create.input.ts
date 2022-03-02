import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateNestedOneWithoutOverviewsInput } from '../configuration-description/configuration-description-create-nested-one-without-overviews.input';

@InputType()
export class ConfigurationDescriptionOverviewCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => ConfigurationDescriptionCreateNestedOneWithoutOverviewsInput, {nullable:false})
    configurationDescription!: ConfigurationDescriptionCreateNestedOneWithoutOverviewsInput;
}
