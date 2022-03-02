import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentUpdateWithoutComponentOverviewsInput } from './component-update-without-component-overviews.input';
import { ComponentCreateWithoutComponentOverviewsInput } from './component-create-without-component-overviews.input';

@InputType()
export class ComponentUpsertWithoutComponentOverviewsInput {

    @Field(() => ComponentUpdateWithoutComponentOverviewsInput, {nullable:false})
    update!: ComponentUpdateWithoutComponentOverviewsInput;

    @Field(() => ComponentCreateWithoutComponentOverviewsInput, {nullable:false})
    create!: ComponentCreateWithoutComponentOverviewsInput;
}
