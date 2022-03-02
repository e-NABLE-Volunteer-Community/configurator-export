import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewWhereInput } from './component-overview-where.input';

@ArgsType()
export class DeleteManyComponentOverviewArgs {

    @Field(() => ComponentOverviewWhereInput, {nullable:true})
    where?: ComponentOverviewWhereInput;
}
