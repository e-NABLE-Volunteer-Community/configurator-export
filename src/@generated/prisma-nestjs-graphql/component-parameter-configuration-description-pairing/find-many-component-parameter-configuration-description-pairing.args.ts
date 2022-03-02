import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingWhereInput } from './component-parameter-configuration-description-pairing-where.input';
import { ComponentParameterConfigurationDescriptionPairingOrderByWithRelationInput } from './component-parameter-configuration-description-pairing-order-by-with-relation.input';
import { ComponentParameterConfigurationDescriptionPairingWhereUniqueInput } from './component-parameter-configuration-description-pairing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComponentParameterConfigurationDescriptionPairingScalarFieldEnum } from './component-parameter-configuration-description-pairing-scalar-field.enum';

@ArgsType()
export class FindManyComponentParameterConfigurationDescriptionPairingArgs {

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereInput, {nullable:true})
    where?: ComponentParameterConfigurationDescriptionPairingWhereInput;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComponentParameterConfigurationDescriptionPairingOrderByWithRelationInput>;

    @Field(() => ComponentParameterConfigurationDescriptionPairingWhereUniqueInput, {nullable:true})
    cursor?: ComponentParameterConfigurationDescriptionPairingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComponentParameterConfigurationDescriptionPairingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComponentParameterConfigurationDescriptionPairingScalarFieldEnum>;
}
