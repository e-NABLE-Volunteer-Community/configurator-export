import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateWithoutComponentOverviewInput } from './component-create-without-component-overview.input';
import { ComponentCreateOrConnectWithoutComponentOverviewInput } from './component-create-or-connect-without-component-overview.input';
import { ComponentUpsertWithoutComponentOverviewInput } from './component-upsert-without-component-overview.input';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentUpdateWithoutComponentOverviewInput } from './component-update-without-component-overview.input';

@InputType()
export class ComponentUpdateOneRequiredWithoutComponentOverviewInput {

    @Field(() => ComponentCreateWithoutComponentOverviewInput, {nullable:true})
    create?: ComponentCreateWithoutComponentOverviewInput;

    @Field(() => ComponentCreateOrConnectWithoutComponentOverviewInput, {nullable:true})
    connectOrCreate?: ComponentCreateOrConnectWithoutComponentOverviewInput;

    @Field(() => ComponentUpsertWithoutComponentOverviewInput, {nullable:true})
    upsert?: ComponentUpsertWithoutComponentOverviewInput;

    @Field(() => ComponentWhereUniqueInput, {nullable:true})
    connect?: ComponentWhereUniqueInput;

    @Field(() => ComponentUpdateWithoutComponentOverviewInput, {nullable:true})
    update?: ComponentUpdateWithoutComponentOverviewInput;
}
