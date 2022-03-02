import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentCreateWithoutComponentOverviewInput } from './component-create-without-component-overview.input';

@InputType()
export class ComponentCreateOrConnectWithoutComponentOverviewInput {

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;

    @Field(() => ComponentCreateWithoutComponentOverviewInput, {nullable:false})
    create!: ComponentCreateWithoutComponentOverviewInput;
}
