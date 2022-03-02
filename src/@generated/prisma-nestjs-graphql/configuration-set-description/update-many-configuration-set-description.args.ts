import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigurationSetDescriptionUncheckedUpdateManyInput } from './configuration-set-description-unchecked-update-many.input';
import { ConfigurationSetDescriptionWhereInput } from './configuration-set-description-where.input';

@ArgsType()
export class UpdateManyConfigurationSetDescriptionArgs {

    @Field(() => ConfigurationSetDescriptionUncheckedUpdateManyInput, {nullable:false})
    data!: ConfigurationSetDescriptionUncheckedUpdateManyInput;

    @Field(() => ConfigurationSetDescriptionWhereInput, {nullable:true})
    where?: ConfigurationSetDescriptionWhereInput;
}
