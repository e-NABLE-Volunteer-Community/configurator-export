import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereInput } from './configuration-description-where.input';

@ArgsType()
export class DeleteManyConfigurationDescriptionArgs {

    @Field(() => ConfigurationDescriptionWhereInput, {nullable:true})
    where?: ConfigurationDescriptionWhereInput;
}
