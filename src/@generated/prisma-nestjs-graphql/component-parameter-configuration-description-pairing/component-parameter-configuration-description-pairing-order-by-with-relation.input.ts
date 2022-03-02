import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComponentParameterOrderByWithRelationInput } from '../component-parameter/component-parameter-order-by-with-relation.input';
import { ConfigurationDescriptionOrderByWithRelationInput } from '../configuration-description/configuration-description-order-by-with-relation.input';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    componentParameterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationDescriptionId?: keyof typeof SortOrder;

    @Field(() => ComponentParameterOrderByWithRelationInput, {nullable:true})
    componentParameter?: ComponentParameterOrderByWithRelationInput;

    @Field(() => ConfigurationDescriptionOrderByWithRelationInput, {nullable:true})
    configurationDescription?: ConfigurationDescriptionOrderByWithRelationInput;
}
