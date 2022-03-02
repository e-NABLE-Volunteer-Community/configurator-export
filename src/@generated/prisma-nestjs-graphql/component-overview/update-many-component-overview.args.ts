import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewUpdateManyMutationInput } from './component-overview-update-many-mutation.input';
import { ComponentOverviewWhereInput } from './component-overview-where.input';

@ArgsType()
export class UpdateManyComponentOverviewArgs {

    @Field(() => ComponentOverviewUpdateManyMutationInput, {nullable:false})
    data!: ComponentOverviewUpdateManyMutationInput;

    @Field(() => ComponentOverviewWhereInput, {nullable:true})
    where?: ComponentOverviewWhereInput;
}
