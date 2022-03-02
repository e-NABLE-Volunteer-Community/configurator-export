import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewCreateInput } from './component-overview-create.input';

@ArgsType()
export class CreateOneComponentOverviewArgs {

    @Field(() => ComponentOverviewCreateInput, {nullable:false})
    data!: ComponentOverviewCreateInput;
}
