import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentOverviewWhereUniqueInput } from './component-overview-where-unique.input';
import { ComponentOverviewCreateWithoutComponentInput } from './component-overview-create-without-component.input';

@InputType()
export class ComponentOverviewCreateOrConnectWithoutComponentInput {

    @Field(() => ComponentOverviewWhereUniqueInput, {nullable:false})
    where!: ComponentOverviewWhereUniqueInput;

    @Field(() => ComponentOverviewCreateWithoutComponentInput, {nullable:false})
    create!: ComponentOverviewCreateWithoutComponentInput;
}
