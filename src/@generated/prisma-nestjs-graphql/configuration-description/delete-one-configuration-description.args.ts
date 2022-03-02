import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionWhereUniqueInput } from './configuration-description-where-unique.input';

@ArgsType()
export class DeleteOneConfigurationDescriptionArgs {

    @Field(() => ConfigurationDescriptionWhereUniqueInput, {nullable:false})
    where!: ConfigurationDescriptionWhereUniqueInput;
}
