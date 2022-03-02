import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';

@ArgsType()
export class FindUniqueComponentOverviewArgs {

    @Field(() => ComponentOverviewWhereUniqueInput, {nullable:false})
    where!: ComponentOverviewWhereUniqueInput;
}
