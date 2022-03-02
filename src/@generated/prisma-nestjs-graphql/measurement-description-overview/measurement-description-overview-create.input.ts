import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionCreateNestedOneWithoutOverviewsInput } from '../measurement-description/measurement-description-create-nested-one-without-overviews.input';

@InputType()
export class MeasurementDescriptionOverviewCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    locale!: string;

    @Field(() => MeasurementDescriptionCreateNestedOneWithoutOverviewsInput, {nullable:false})
    measurementDescription!: MeasurementDescriptionCreateNestedOneWithoutOverviewsInput;
}
