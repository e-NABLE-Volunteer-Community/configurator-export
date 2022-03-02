import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateWithoutComponentOverviewsInput } from './component-create-without-component-overviews.input';
import { ComponentCreateOrConnectWithoutComponentOverviewsInput } from './component-create-or-connect-without-component-overviews.input';
import { ComponentUpsertWithoutComponentOverviewsInput } from './component-upsert-without-component-overviews.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentUpdateWithoutComponentOverviewsInput } from './component-update-without-component-overviews.input';

@InputType()
export class ComponentUpdateOneRequiredWithoutComponentOverviewsInput {

    @Field(() => ComponentCreateWithoutComponentOverviewsInput, {nullable:true})
    create?: ComponentCreateWithoutComponentOverviewsInput;

    @Field(() => ComponentCreateOrConnectWithoutComponentOverviewsInput, {nullable:true})
    connectOrCreate?: ComponentCreateOrConnectWithoutComponentOverviewsInput;

    @Field(() => ComponentUpsertWithoutComponentOverviewsInput, {nullable:true})
    upsert?: ComponentUpsertWithoutComponentOverviewsInput;

    @Field(() => ComponentWhereUniqueInput, {nullable:true})
    connect?: ComponentWhereUniqueInput;

    @Field(() => ComponentUpdateWithoutComponentOverviewsInput, {nullable:true})
    update?: ComponentUpdateWithoutComponentOverviewsInput;
}
