import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingScalarWhereInput {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarWhereInput], {nullable:true})
    AND?: Array<ComponentParameterConfigurationDescriptionPairingScalarWhereInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarWhereInput], {nullable:true})
    OR?: Array<ComponentParameterConfigurationDescriptionPairingScalarWhereInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarWhereInput], {nullable:true})
    NOT?: Array<ComponentParameterConfigurationDescriptionPairingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    componentParameterId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    configurationDescriptionId?: IntFilter;
}
