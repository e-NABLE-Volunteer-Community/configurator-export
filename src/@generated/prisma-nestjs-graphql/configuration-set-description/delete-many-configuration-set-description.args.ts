import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionWhereInput } from './configuration-set-description-where.input';

@ArgsType()
export class DeleteManyConfigurationSetDescriptionArgs {

    @Field(() => ConfigurationSetDescriptionWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionWhereInput;
}
