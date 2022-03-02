import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ComponentParameterMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    componentId?: true;

    @Field(() => Boolean, {nullable:true})
    kind?: true;

    @Field(() => Boolean, {nullable:true})
    cadName?: true;

    @Field(() => Boolean, {nullable:true})
    humanName?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;
}
