import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionCreateInput } from './configuration-set-description-create.input';

@ArgsType()
export class CreateOneConfigurationSetDescriptionArgs {

    @Field(() => ConfigurationSetDescriptionCreateInput, {nullable:false})
    data!: ConfigurationSetDescriptionCreateInput;
}
