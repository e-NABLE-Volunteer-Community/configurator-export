import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementDescriptionUpdateWithoutOverviewsInput } from './measurement-description-update-without-overviews.input';
import { MeasurementDescriptionCreateWithoutOverviewsInput } from './measurement-description-create-without-overviews.input';

@InputType()
export class MeasurementDescriptionUpsertWithoutOverviewsInput {

    @Field(() => MeasurementDescriptionUpdateWithoutOverviewsInput, {nullable:false})
    update!: MeasurementDescriptionUpdateWithoutOverviewsInput;

    @Field(() => MeasurementDescriptionCreateWithoutOverviewsInput, {nullable:false})
    create!: MeasurementDescriptionCreateWithoutOverviewsInput;
}
