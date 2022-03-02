import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MeasurementDescriptionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    measurementSetDescriptionId?: true;

    @Field(() => Boolean, {nullable:true})
    kind?: true;
}
