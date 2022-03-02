import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereInput } from './configuration-set-description-where.input';

@InputType()
export class ConfigurationSetDescriptionRelationFilter {

    @Field(() => ConfigurationSetDescriptionWhereInput, {nullable:true})
    is?: ConfigurationSetDescriptionWhereInput;

    @Field(() => ConfigurationSetDescriptionWhereInput, {nullable:true})
    isNot?: ConfigurationSetDescriptionWhereInput;
}
