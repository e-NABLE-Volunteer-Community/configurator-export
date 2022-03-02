import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionCreateNestedOneWithoutOverviewsInput } from '../measurement-set-description/measurement-set-description-create-nested-one-without-overviews.input';

@InputType()
export class MeasurementSetDescriptionOverviewCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => MeasurementSetDescriptionCreateNestedOneWithoutOverviewsInput, {nullable:false})
    measurementSetDescription!: MeasurementSetDescriptionCreateNestedOneWithoutOverviewsInput;
}
