import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MeasurementSetDescriptionOverviewCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    measurementSetDescriptionId?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    locale?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
