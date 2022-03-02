import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateWithoutComponentOverviewsInput } from './component-create-without-component-overviews.input';
import { ComponentCreateOrConnectWithoutComponentOverviewsInput } from './component-create-or-connect-without-component-overviews.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';

@InputType()
export class ComponentCreateNestedOneWithoutComponentOverviewsInput {

    @Field(() => ComponentCreateWithoutComponentOverviewsInput, {nullable:true})
    create?: ComponentCreateWithoutComponentOverviewsInput;

    @Field(() => ComponentCreateOrConnectWithoutComponentOverviewsInput, {nullable:true})
    connectOrCreate?: ComponentCreateOrConnectWithoutComponentOverviewsInput;

    @Field(() => ComponentWhereUniqueInput, {nullable:true})
    connect?: ComponentWhereUniqueInput;
}
