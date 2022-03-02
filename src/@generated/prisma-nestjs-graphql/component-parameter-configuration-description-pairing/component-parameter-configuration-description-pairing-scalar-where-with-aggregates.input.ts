import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput {

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    componentParameterId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    configurationDescriptionId?: IntWithAggregatesFilter;
}
