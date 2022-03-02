import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateWithoutComponentOverviewInput } from './component-create-without-component-overview.input';
import { ComponentCreateOrConnectWithoutComponentOverviewInput } from './component-create-or-connect-without-component-overview.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';

@InputType()
export class ComponentCreateNestedOneWithoutComponentOverviewInput {

    @Field(() => ComponentCreateWithoutComponentOverviewInput, {nullable:true})
    create?: ComponentCreateWithoutComponentOverviewInput;

    @Field(() => ComponentCreateOrConnectWithoutComponentOverviewInput, {nullable:true})
    connectOrCreate?: ComponentCreateOrConnectWithoutComponentOverviewInput;

    @Field(() => ComponentWhereUniqueInput, {nullable:true})
    connect?: ComponentWhereUniqueInput;
}
