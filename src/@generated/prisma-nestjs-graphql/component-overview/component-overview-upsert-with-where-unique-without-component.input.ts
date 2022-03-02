import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';
import { ComponentOverviewUpdateWithoutComponentInput } from './component-overview-update-without-component.input';
import { ComponentOverviewCreateWithoutComponentInput } from './component-overview-create-without-component.input';

@InputType()
export class ComponentOverviewUpsertWithWhereUniqueWithoutComponentInput {

    @Field(() => ComponentOverviewWhereUniqueInput, {nullable:false})
    where!: ComponentOverviewWhereUniqueInput;

    @Field(() => ComponentOverviewUpdateWithoutComponentInput, {nullable:false})
    update!: ComponentOverviewUpdateWithoutComponentInput;

    @Field(() => ComponentOverviewCreateWithoutComponentInput, {nullable:false})
    create!: ComponentOverviewCreateWithoutComponentInput;
}
