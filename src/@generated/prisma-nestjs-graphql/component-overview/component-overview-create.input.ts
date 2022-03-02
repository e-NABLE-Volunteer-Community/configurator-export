import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentCreateNestedOneWithoutComponentOverviewsInput } from '../component/component-create-nested-one-without-component-overviews.input';

@InputType()
export class ComponentOverviewCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => ComponentCreateNestedOneWithoutComponentOverviewsInput, {nullable:false})
    component!: ComponentCreateNestedOneWithoutComponentOverviewsInput;
}
