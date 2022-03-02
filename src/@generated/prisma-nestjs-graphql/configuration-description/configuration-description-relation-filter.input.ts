import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereInput } from './configuration-description-where.input';

@InputType()
export class ConfigurationDescriptionRelationFilter {

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    is?: ConfigurationDescriptionWhereInput;

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    isNot?: ConfigurationDescriptionWhereInput;
}
