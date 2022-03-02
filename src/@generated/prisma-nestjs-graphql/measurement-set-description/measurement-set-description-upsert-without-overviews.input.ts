import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MeasurementSetDescriptionUpdateWithoutOverviewsInput } from './measurement-set-description-update-without-overviews.input';
import { MeasurementSetDescriptionCreateWithoutOverviewsInput } from './measurement-set-description-create-without-overviews.input';

@InputType()
export class MeasurementSetDescriptionUpsertWithoutOverviewsInput {

    @Field(() => MeasurementSetDescriptionUpdateWithoutOverviewsInput, {nullable:false})
    update!: MeasurementSetDescriptionUpdateWithoutOverviewsInput;

    @Field(() => MeasurementSetDescriptionCreateWithoutOverviewsInput, {nullable:false})
    create!: MeasurementSetDescriptionCreateWithoutOverviewsInput;
}
