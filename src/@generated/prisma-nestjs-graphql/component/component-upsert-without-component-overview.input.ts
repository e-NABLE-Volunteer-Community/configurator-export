import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentUpdateWithoutComponentOverviewInput } from './component-update-without-component-overview.input';
import { ComponentCreateWithoutComponentOverviewInput } from './component-create-without-component-overview.input';

@InputType()
export class ComponentUpsertWithoutComponentOverviewInput {

    @Field(() => ComponentUpdateWithoutComponentOverviewInput, {nullable:false})
    update!: ComponentUpdateWithoutComponentOverviewInput;

    @Field(() => ComponentCreateWithoutComponentOverviewInput, {nullable:false})
    create!: ComponentCreateWithoutComponentOverviewInput;
}
