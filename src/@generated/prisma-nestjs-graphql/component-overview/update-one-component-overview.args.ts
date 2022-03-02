import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewUpdateInput } from './component-overview-update.input';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';

@ArgsType()
export class UpdateOneComponentOverviewArgs {

    @Field(() => ComponentOverviewUpdateInput, {nullable:false})
    data!: ComponentOverviewUpdateInput;

    @Field(() => ComponentOverviewWhereUniqueInput, {nullable:false})
    where!: ComponentOverviewWhereUniqueInput;
}
