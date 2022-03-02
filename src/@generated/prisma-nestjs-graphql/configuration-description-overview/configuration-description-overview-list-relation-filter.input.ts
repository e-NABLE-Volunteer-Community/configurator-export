import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionOverviewWhereInput } from './configuration-description-overview-where.input';

@InputType()
export class ConfigurationDescriptionOverviewListRelationFilter {

    @Field(() => ConfigurationDescriptionOverviewWhereInput, {nullable:true})
    every?: ConfigurationDescriptionOverviewWhereInput;

    @Field(() => ConfigurationDescriptionOverviewWhereInput, {nullable:true})
    some?: ConfigurationDescriptionOverviewWhereInput;

    @Field(() => ConfigurationDescriptionOverviewWhereInput, {nullable:true})
    none?: ConfigurationDescriptionOverviewWhereInput;
}
