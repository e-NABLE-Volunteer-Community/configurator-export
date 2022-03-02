import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationDescriptionCreateInput } from './configuration-description-create.input';

@ArgsType()
export class CreateOneConfigurationDescriptionArgs {

    @Field(() => ConfigurationDescriptionCreateInput, {nullable:false})
    data!: ConfigurationDescriptionCreateInput;
}
