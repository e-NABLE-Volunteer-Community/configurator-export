import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ComponentParameterConfigurationDescriptionPairingAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    componentParameterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    configurationDescriptionId?: keyof typeof SortOrder;
}
