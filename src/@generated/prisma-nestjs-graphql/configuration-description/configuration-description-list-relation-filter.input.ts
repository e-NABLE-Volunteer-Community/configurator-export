import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereInput } from './configuration-description-where.input';

@InputType()
export class ConfigurationDescriptionListRelationFilter {

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    every?: ConfigurationDescriptionWhereInput;

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    some?: ConfigurationDescriptionWhereInput;

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    none?: ConfigurationDescriptionWhereInput;
}
