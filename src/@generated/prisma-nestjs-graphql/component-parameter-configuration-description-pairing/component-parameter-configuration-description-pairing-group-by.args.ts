import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereInput } from './component-parameter-configuration-description-pairing-where.input';
import { ComponentParameterConfigurationDescriptionPairingOrderByWithAggregationInput } from './component-parameter-configuration-description-pairing-order-by-with-aggregation.input';
import { ComponentParameterConfigurationDescriptionPairingScalarFieldEnum } from './component-parameter-configuration-description-pairing-scalar-field.enum';
import { ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput } from './component-parameter-configuration-description-pairing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingCountAggregateInput } from './component-parameter-configuration-description-pairing-count-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingAvgAggregateInput } from './component-parameter-configuration-description-pairing-avg-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingSumAggregateInput } from './component-parameter-configuration-description-pairing-sum-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingMinAggregateInput } from './component-parameter-configuration-description-pairing-min-aggregate.input';
import { ComponentParameterConfigurationDescriptionPairingMaxAggregateInput } from './component-parameter-configuration-description-pairing-max-aggregate.input';

@ArgsType()
export class ComponentParameterConfigurationDescriptionPairingGroupByArgs {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    where?: ComponentParameterConfigurationDescriptionPairingWhereInput;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ComponentParameterConfigurationDescriptionPairingOrderByWithAggregationInput>;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ComponentParameterConfigurationDescriptionPairingScalarFieldEnum>;

    @Field(() => ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput, {nullable:true})
    having?: ComponentParameterConfigurationDescriptionPairingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ComponentParameterConfigurationDescriptionPairingCountAggregateInput, {nullable:true})
    _count?: ComponentParameterConfigurationDescriptionPairingCountAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingAvgAggregateInput, {nullable:true})
    _avg?: ComponentParameterConfigurationDescriptionPairingAvgAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingSumAggregateInput, {nullable:true})
    _sum?: ComponentParameterConfigurationDescriptionPairingSumAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingMinAggregateInput, {nullable:true})
    _min?: ComponentParameterConfigurationDescriptionPairingMinAggregateInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingMaxAggregateInput, {nullable:true})
    _max?: ComponentParameterConfigurationDescriptionPairingMaxAggregateInput;
}
