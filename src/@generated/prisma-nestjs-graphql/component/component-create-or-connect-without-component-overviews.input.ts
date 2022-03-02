import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComponentWhereUniqueInput } from './component-where-unique.input';
import { ComponentCreateWithoutComponentOverviewsInput } from './component-create-without-component-overviews.input';

@InputType()
export class ComponentCreateOrConnectWithoutComponentOverviewsInput {

    @Field(() => ComponentWhereUniqueInput, {nullable:false})
    where!: ComponentWhereUniqueInput;

    @Field(() => ComponentCreateWithoutComponentOverviewsInput, {nullable:false})
    create!: ComponentCreateWithoutComponentOverviewsInput;
}
