import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';
import { ComponentOverviewUpdateWithoutComponentInput } from './component-overview-update-without-component.input';

@InputType()
export class ComponentOverviewUpdateWithWhereUniqueWithoutComponentInput {

    @Field(() => ComponentOverviewWhereUniqueInput, {nullable:false})
    where!: ComponentOverviewWhereUniqueInput;

    @Field(() => ComponentOverviewUpdateWithoutComponentInput, {nullable:false})
    data!: ComponentOverviewUpdateWithoutComponentInput;
}
