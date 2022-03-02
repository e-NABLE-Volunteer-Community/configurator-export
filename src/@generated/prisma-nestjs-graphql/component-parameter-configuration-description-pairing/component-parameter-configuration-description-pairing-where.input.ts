import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ComponentParameterRelationFilter } from '../component-parameter/component-parameter-relation-filter.input';
import { ConfigurationDescriptionRelationFilter } from '../configuration-description/configuration-description-relation-filter.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingWhereInput {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereInput], {nullable:true})
    AND?: Array<ComponentParameterConfigurationDescriptionPairingWhereInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereInput], {nullable:true})
    OR?: Array<ComponentParameterConfigurationDescriptionPairingWhereInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingWhereInput], {nullable:true})
    NOT?: Array<ComponentParameterConfigurationDescriptionPairingWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    componentParameterId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    configurationDescriptionId?: IntFilter;

    @Field(() => ComponentParameterRelationFilter, {nullable:true})
    componentParameter?: ComponentParameterRelationFilter;

    @Field(() => ConfigurationDescriptionRelationFilter, {nullable:true})
    configurationDescription?: ConfigurationDescriptionRelationFilter;
}
