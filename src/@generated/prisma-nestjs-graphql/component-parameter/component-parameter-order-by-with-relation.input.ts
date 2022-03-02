import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComponentOrderByWithRelationInput } from '../component/component-order-by-with-relation.input';
import { ComponentParameterConfigurationDescriptionPairingOrderByWithRelationInput } from '../component-parameter-configuration-description-pairing/component-parameter-configuration-description-pairing-order-by-with-relation.input';

@InputType()
export class ComponentParameterOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    componentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kind?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cadName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    humanName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => ComponentOrderByWithRelationInput, {nullable:true})
    component?: ComponentOrderByWithRelationInput;

    @Field(() => ComponentParameterConfigurationDescriptionPairingOrderByWithRelationInput, {nullable:true})
    pairing?: ComponentParameterConfigurationDescriptionPairingOrderByWithRelationInput;
}
