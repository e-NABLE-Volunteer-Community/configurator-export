import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumComponentParameterKindFilter } from '../prisma/enum-component-parameter-kind-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ComponentRelationFilter } from '../component/component-relation-filter.input';
import { ComponentParameterConfigurationDescriptionPairingRelationFilter } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-relation-filter.input';

@InputType()
export class ComponentParameterWhereInput {

    @Field(() => [ComponentParameterWhereInput], {nullable:true})
    AND?: Array<ComponentParameterWhereInput>;

    @Field(() => [ComponentParameterWhereInput], {nullable:true})
    OR?: Array<ComponentParameterWhereInput>;

    @Field(() => [ComponentParameterWhereInput], {nullable:true})
    NOT?: Array<ComponentParameterWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    componentId?: IntFilter;

    @Field(() => EnumComponentParameterKindFilter, {nullable:true})
    kind?: EnumComponentParameterKindFilter;

    @Field(() => StringFilter, {nullable:true})
    cadName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    humanName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => ComponentRelationFilter, {nullable:true})
    component?: ComponentRelationFilter;

    @Field(() => ComponentParameterConfigurationDescriptionPairingRelationFilter, {nullable:true})
    pairing?: ComponentParameterConfigurationDescriptionPairingRelationFilter;
}
