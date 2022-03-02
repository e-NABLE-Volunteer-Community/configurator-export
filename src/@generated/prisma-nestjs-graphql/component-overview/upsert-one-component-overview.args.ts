import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';
import { ComponentOverviewCreateInput } from './component-overview-create.input';
import { ComponentOverviewUpdateInput } from './component-overview-update.input';

@ArgsType()
export class UpsertOneComponentOverviewArgs {

    @Field(() => ComponentOverviewWhereUniqueInput, {nullable:false})
    where!: ComponentOverviewWhereUniqueInput;

    @Field(() => ComponentOverviewCreateInput, {nullable:false})
    create!: ComponentOverviewCreateInput;

    @Field(() => ComponentOverviewUpdateInput, {nullable:false})
    update!: ComponentOverviewUpdateInput;
}
